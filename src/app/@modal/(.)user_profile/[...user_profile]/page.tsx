import { UserProfile } from "@clerk/nextjs";

export default function UserProfileModal() {
  return (
    <div className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm">
      <div className="bg-background fixed inset-x-4 top-[50%] z-50 grid translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg md:mx-auto md:w-full md:max-w-lg">
        <UserProfile routing="path" path="/user-profile" />
      </div>
    </div>
  );
}
