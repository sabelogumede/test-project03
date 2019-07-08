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
    extend: "apostrophe-widgets",
    label: "Banner slider",
    addFields: [
      {
        type: "select",
        name: "bg_color",
        label: "select a background color",
        choices: [
          {
            label: "Blue",
            value: "blue"
          },
          {
            label: "Purple",
            value: "purple"
          }
        ]
      },
      {
        name: "heading",
        type: "string",
        max: 80,
        label: "Heading",
        required: true
      },
      {
        name: "subheading",
        type: "string",
        max: 255,
        textarea: true,
        label: "Subheading",
        required: true
      },
      {
        name: "cta_button_1_label",
        label: "cta button 1 label",
        type: "string"
      },
      {
        name: "cta_button_1_url",
        label: "cta button 1 url",
        type: "string"
      },
      {
        name: "cta_button_2_label",
        label: "cta button 2 label",
        type: "string"
      },
      {
        name: "cta_button_2_url",
        label: "cta button 2 url",
        type: "string"
      },

      {
        name: "_image",
        type: "joinByOne",
        withType: "apostrophe-image",
        label: "Image",
        required: true,
        idField: "imageId",
        filters: {
          projection: {
            attachment: true,
            description: true,
            title: true
          }
        }
      }
    ],
    construct: function(self, options) {
        var superPushAssets = self.pushAssets;
        self.pushAssets = function() {
          superPushAssets();
          self.pushAsset('stylesheet', 'banner', { when: 'always' });
        };
      }
  };

 