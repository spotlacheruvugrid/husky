import ListItems from "@/app/components/ListItems";

export default {
  title: "Components/Generate List Items",
  component: ListItems,
};

export const Primary = () => <ListItems />;
export const Secondary = () => (
  <ListItems
    bgColor="green"
    listData={[{ title: "second data" }, { title: "third name" }]}
  />
);
