"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/lib/supasbase";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

export const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        setIsOpen(true);
        return;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  async function signInWithEmail() {
    // check if username exist or not
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("username", username.trim());
    if (data?.length! > 0) {
      console.log(data);
      return toast.error("Username already exist, please use another");
    }
    await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        data: {
          username: username.trim(),
        },
      },
    });
    setLoading(false);
  }

  return (
    <Context.Provider value={{ supabase }}>
      <>
        <Toaster />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className=" p-6 ">
            <h3 className="text-lg my-4">Please sign in to continue</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signInWithEmail();
              }}
            >
              <Input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="my-4"
              />
              <Input
                type="text"
                placeholder="username"
                min={3}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-sm text-gray-400 my-2">
                You will receive a logic magic link here
              </p>
              <div className="flex w-full justify-end">
                <Button disabled={loading} className="bg-twitterColor">
                  Login
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        {children}
      </>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
