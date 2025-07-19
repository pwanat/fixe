import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <UserProfile routing="path" path="/user-profile" />
    </div>
  );
}
