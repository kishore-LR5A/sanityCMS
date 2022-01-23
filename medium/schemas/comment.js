export default {
  name: "comment",
  title: "comment",
  type: "document",
  fields: [
    {
      name: "name",
      // title: 'Title',
      type: "string",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "comments won't be displayed unless approved",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
