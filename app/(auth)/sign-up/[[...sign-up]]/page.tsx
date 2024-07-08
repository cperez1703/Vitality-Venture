import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-4 pt-16">
            </div>
            <div className="flex items-center justify-center mt-8">
                <ClerkLoaded>
                    <SignUp />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted-foreground"/>
                </ClerkLoading>
            </div>
        </div>
        <div className="h-full bg-green-500 hidden lg:flex items-center justify-center">
            <Image src="/gator.png" height={500} width={500} alt="Logo"/>
        </div>
    </div>
);
}