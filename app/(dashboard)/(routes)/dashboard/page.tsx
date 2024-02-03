import { UserButton } from "@clerk/nextjs";

const DashbaordPage = () => {
  return (
    <div>
      <p>Dashboard page (protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashbaordPage;
