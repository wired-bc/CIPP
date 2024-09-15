
import { Layout as DashboardLayout } from "/src/layouts/index.js";

const Page = () => {
  const pageTitle = "Add Store App";

  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>This is a placeholder page for the add store app section.</p>
    </div>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;