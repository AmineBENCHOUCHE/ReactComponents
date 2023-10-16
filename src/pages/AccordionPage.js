import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "fgdfg",
      label: "Can I use React on a project?",
      content:
        "You can use react on any project, You can use react on any projectYou can use react on any project",
    },
    {
      id: "fgdfgdg",
      label: "Can I use Javascript on a project?",
      content:
        "You can use react on any project, You can use react on any project",
    },
    {
      id: "mapezn",
      label: "Can I use CSS on a project?",
      content: "You can use react on any project",
    },
  ];
  return (
    <div className="ml-10 mb-10">
      <Accordion items={items} />
    </div>
  );
}
export default AccordionPage;
