// module.exports = {
//     extend: 'apostrophe-widgets',
//     label: 'Banner slider',
//     addFields: [
//       {
//         name: 'url',
//         type: 'url',
//         label: 'URL',
//         required: true
//       },
//       {
//         name: 'label',
//         type: 'string',
//         label: 'Label',
//         required: true
//       }
//     ]
//   };

  module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Banner slider',
    addFields: [
      {
        name: 'bgcolor',
        type: 'color',
        label: 'background color',
        required: true
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        required: true
      },
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading',
        required: true
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true
      },
      {
        name: 'download',
        type: 'url',
        label: 'Download our profile',
        required: true
      },
      {
        name: '_image',
        type: 'joinByOne',
        withType: 'apostrophe-image',
        label: 'Image',
        required: true,
        idField: 'imageId',
        filters: {
          projection: {
            attachment: true,
            description: true,
            title: true
          }
        }
      }
    ]
  };

 