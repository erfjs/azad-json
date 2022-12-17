// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Discussions Title 1",
      description:
        "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro. Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.",
      participants: [
        {
          id: 1,
          name: "Pooneh",
          src: "profile5",
          owner: false,
        },
        {
          id: 2,
          name: "Shadi",
          src: "profile4",
          owner: false,
        },
        {
          id: 3,
          name: "Nastaran",
          src: "profile3",
          owner: false,
        },
        {
          id: 4,
          name: "Reza",
          src: "profile2",
          owner: false,
        },
        {
          id: 5,
          name: "masood",
          src: "profile1",
          owner: false,
        },
        {
          id: 6,
          name: "zara",
          src: "profile3",
          owner: true,
        },
        {
          id: 7,
          name: "daniel",
          src: "profile6",
          owner: false,
        },
      ],
      topic_count: 83,
    },
    {
      id: 2,
      title: "Discussions Title 2",
      description:
        "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro. Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.",
      participants: [
        {
          id: 2,
          name: "Shadi",
          src: "profile4",
          owner: false,
        },
        {
          id: 3,
          name: "Nastaran",
          src: "profile3",
          owner: false,
        },
        {
          id: 4,
          name: "Reza",
          src: "profile2",
          owner: false,
        },
        {
          id: 5,
          name: "masood",
          src: "profile1",
          owner: true,
        },
      ],
      topic_count: 35,
    },
    {
      id: 3,
      title: "Discussions Title 3",
      description:
        "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro. Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.",
      participants: [
        {
          id: 1,
          name: "Pooneh",
          src: "profile5",
          owner: false,
        },
        {
          id: 2,
          name: "Shadi",
          src: "profile4",
          owner: false,
        },
        {
          id: 3,
          name: "Nastaran",
          src: "profile3",
          owner: false,
        },
        {
          id: 4,
          name: "Reza",
          src: "profile2",
          owner: false,
        },
        {
          id: 5,
          name: "masood",
          src: "profile1",
          owner: true,
        },
        {
          id: 6,
          name: "zara",
          src: "profile3",
          owner: false,
        },
      ],
      topic_count: 124,
    },
    {
      id: 4,
      title: "Discussions Title 4",
      description:
        "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro. Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet oddi netcro.",
      participants: [
        {
          id: 2,
          name: "Shadi",
          src: "profile6",
          owner: false,
        },
        {
          id: 3,
          name: "Nastaran",
          src: "profile3",
          owner: true,
        },
      ],
      topic_count: 103,
    },
  ]);
}
