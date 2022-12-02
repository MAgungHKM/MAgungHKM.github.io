AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title:
      "Operation & Production Dashboard | Digital Fertilizer PUSRI (Frontend)",
    cardImage: "assets/images/experience-page/pusri.png",
    description:
      "A data visualization app for the operation & production of the entire fertilizer plant in PUSRI",
    tagimg: [
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React.js",
      },
      {
        url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png",
        tag: "Next.js",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
        tag: "Tailwind CSS",
      },
      {
        url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        tag: "TypeScript",
      },
    ],
    desp: [
      "Uses Next.js as its core framework, and tailwind for the UI framework",
      "Data visualization using AmCharts 5 and Google Map",
      "Deployed using Docker as a Docker Service in Docker Swarm",
    ],
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Birthday Email Service (Backend)",
    cardImage: "https://cdn-icons-png.flaticon.com/512/303/303642.png",
    description:
      "A simple service that was intended to be a simple implementation of Domain Driven Design according to my knowladge and also help me learn about Node.js Backend Development",
    tagimg: [
      {
        url: "https://pbs.twimg.com/profile_images/970652657231847424/mWKpZoM4_400x400.jpg",
        tag: "Fastify.js",
      },
      {
        url: "https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png",
        tag: "Node.js",
      },
      {
        url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        tag: "TypeScript",
      },
      {
        url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png",
        tag: "PostgreSQL",
      },
      {
        url: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
        tag: "Prisma",
      },
    ],
    desp: [
      "Uses Fastify.js with Domain Driven Design approach at handling User, Email, and Queue",
      "Make use of Cron Job for hourly scheduling to send email every 9 AM at user's local time",
      "Ready to deploy using docker-compose script",
      "Uses PostgreSQL for primary database and Prisma as its ORM",
    ],
    Previewlink: "",
    Githublink: "https://github.com/MAgungHKM/fastify-birthday-email-service",
  },
  {
    title: "Business Information Center PUSRI (Backend)",
    cardImage: "assets/images/project-page/bic.png",
    description:
      "A document storage and sharing platform for anything related to business at PUSRI",
    tagimg: [
      {
        url: "https://repository-images.githubusercontent.com/234231371/00fd8700-5430-11ea-820b-15fd85b2472c",
        tag: "Fiber",
      },
      {
        url: "https://cdn.worldvectorlogo.com/logos/gopher.svg",
        tag: "Go",
      },
      {
        url: "https://w7.pngwing.com/pngs/262/242/png-transparent-nginx-phusion-passenger-application-software-proxy-server-reverse-proxy-creativo-logo-de-marca-angle-text-trademark.png",
        tag: "Nginx",
      },
      {
        url: "https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png",
        tag: "MS SQL Server",
      },
      {
        url: "https://avatars.githubusercontent.com/u/15127678?s=280&v=4",
        tag: "GORM",
      },
    ],
    desp: [
      "Uses Fiber with Model-View-Controller approach to be used as RESTful API",
      "Make use of Raw Websocket to handle realtime user's role management",
      "Uses pdfcpu to handle document verification, encryption, and modification",
      "Deployed behind Nginx for load balancing, and inside Docker Swarm, to make it easy to scale",
      "Uses Microsoft SQL Server for primary database and GORM as its ORM",
    ],
    Previewlink: "https://bic.pusri.co.id/",
    Githublink: "",
  },
  {
    title: "Distribution Calculator PUSRI (Frontend)",
    cardImage: "assets/images/project-page/kubus.jpeg",
    description:
      "A calculator app for the Procurement Department for calculating estimated price based on tariffs and additional fee of each distribution",
    tagimg: [
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React.js",
      },
      {
        url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png",
        tag: "Next.js",
      },
      {
        url: "https://mui.com/static/logo.png",
        tag: "MUI components",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        tag: "JavaScript",
      },
    ],
    desp: [
      "Uses Next.js as its core framework, and MUI components for the UI framework",
      "Deployed using Docker as a Docker Service in Docker Swarm",
    ],
    Previewlink: "https://kubus.pusri.co.id",
    Githublink: "",
  },
  {
    title: "CI/CD Pipeline at PUSRI (DevOps)",
    cardImage:
      "https://www.parasoft.com/wp-content/uploads/2021/04/CICD_CICD.png",
    description:
      "A simple CI/CD Pipeline make uses of Docker Sawrm, GitLab CI/CD, Sonatype Nexus Repository, Deployment Webhook",
    tagimg: [
      {
        url: "https://raw.githubusercontent.com/docker-library/docs/471fa6e4cb58062ccbf91afc111980f9c7004981/swarm/logo.png",
        tag: "Docker Swarm",
      },
      {
        url: "https://gitlab.com/uploads/-/system/project/avatar/278964/project_avatar.png",
        tag: "GitLab",
      },
      {
        url: "https://assets-global.website-files.com/5f10ed4c0ebf7221fb5661a5/5f2af61146c55b6e172fa5b3_NexusRepo_Icon.png",
        tag: "Sonatype Nexus Repository",
      },
      {
        url: "https://expressjs.com/images/express-facebook-share.png",
        tag: "Express.js",
      },
    ],
    desp: [
      "Docker swarm as services deployment platform",
      "GitLab CI/CD for build and test",
      "Nexus Repository as Private Docker Registry",
      "Express.js Webhook for automatic deployment",
    ],
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Performance API for Multiple Plant at PUSRI",
    cardImage: "https://cdn-icons-png.flaticon.com/512/2172/2172271.png",
    description:
      "A simple read API to be used as data feed for the parent company",
    tagimg: [
      {
        url: "https://www.geekandjob.com/uploads/wiki/2bd3b3fa67901570a8c9fc64ba155cc5fb9f026f.png",
        tag: "Laravel Lumen",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        tag: "Laravel",
      },
      {
        url: "https://www.dcorba.com/wp-content/uploads/2017/11/mysql-logo.png",
        tag: "MySQL",
      },
    ],
    desp: [
      "Uses Laravel Lumen as the core framework",
      "Uses MySQL for primary database and Laravel Eloquent as its ORM",
      "Actually consists of multiple seperate services for each Plant, but the flow is the same in all of it",
    ],
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Scaling Drawer App (Mobile)",
    cardImage: "assets/images/project-page/scaling-drawer-demo.gif",
    description:
      "A React Native implementation of Flutter's kf_drawer library with React Navigation support",
    tagimg: [
      {
        url: "data:image/png;base64,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",
        tag: "React Native",
      },
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        tag: "JavaScript",
      },
    ],
    desp: [
      "Uses React Native as the core framework",
      "Tries to match kf_drawer vertically but also handles it horizontally as well",
      "Full React Navigation support",
    ],
    Previewlink: "",
    Githublink: "https://github.com/MAgungHKM/scaling-drawer-app",
  },
  {
    title: "Pusri QR Scanner (Mobile)",
    cardImage: "assets/images/project-page/qr.png",
    description:
      "A QR scanner app to be used internally accross multiple applications",
    tagimg: [
      {
        url: "data:image/png;base64,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",
        tag: "React Native",
      },
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        tag: "JavaScript",
      },
    ],
    desp: [
      "Uses React Native as the core framework",
      "Only accepts pre-configured URL or data ID",
      "Are not deployed anywhere, internally distributed",
    ],
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "IAM Pusri (Mobile & Backend)",
    cardImage: "assets/images/project-page/iam.png",
    description: "An employee bulletin & HR administration app",
    tagimg: [
      {
        url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9Uwd5Ov91Jvt1Lv91Cvdz5/f52zOSR1Ojo9vr0+/2J0uea2OpqyOLu+Pui2utcw9/C5vLX7/bf8viw4O7N6/Sz4e+75PDS7fWD0OZnx+Gg2uuW1ulzyuN8zuQ1utq2S80EAAAVoElEQVR4nO1dCZesKg5uWVyrLNeyrMX+//9yANlFpbb2vjnmzLzbbSsSCEkIX+LPz0477bTTTjvttNNOO+30n6I8qeskfbORMGnL7txd8o906YOUnh8IYkIQPG5t+GIr1SlCGEFKOLjVH+3he5RnGAaCAEI46p5nsr4FGAWKSCvJF/r6Ep0xCCyCOHtuCrpi2gjA5y/1+EnKsN21sXvH1ruJJkAT/ijhwxf77U0DdPWN8Vj48djguSYCfP9y7z3ohuZ6R3mM1mW1LRZaCHD3Bzws90+KKEBMl0JT3HC2bD/yyFh/VE2RCcWqFby1ugmA6NqhTcI0qc4ZMJgEYGkWGn39kTG6npglDKuDEFww/BUrMz3kHUG9Zh4uGdaZxMPcNOZHXUBx0WjzlV95E7j6KgcrFPJeoNi6fi40HgF0a5xOU8JkyV6sNgSLjy913ou6cQ5AMf1TWWgC6FSJmpVxqqQc/wMrkQ+zW5C6QhkBeLUdzVxTofDqbOA03oFuH++3NyV8lOeUwU0TQ2RK6kXxB+YsQsjvAZ/t9TN0HicJX+ZuSB6KR3zS/tBo12cV0c+Bi8h2PvjAV9rCLWfFCuzl1VhZ0SWTXo+3oeZzXX6SeCfjpXs0i4CufLYGdemx6BAUy6vg68SXISqXbzupCQuoWgwVz3hFicTrQvJVapGfNldaBaCaKFEgf1vzzEu+0Lfa8Tdcm6/emF8FjwCWSocGq4ZOLMRZVfZlGmUIXD1u7aVplD+g43ocIB1HBm61wYjGqch87j3Z22TUrz8kdBk6rd/5FRoXFPBzOTqTRc+t7RGsa+svEh9gT2vV6ixiz4e4xd3KXIxvh77holoTUd+FxZf68dUuvkfcbYQr5lDdXygWfdX/wV+ZfYH45tCbw6u2Yww8Y+M8CuTYnf0Fhc+p8ocR2/CcFb6B2sqpeYrDzIwYgsjrqY05fEbTHKRXw/+FfmZ0Uyl9xlpIawgzwaqXweCaZisOR4vvE2SoBIPornaM2CMift/UWgiHY907yZGcwR9NYD1CTP22Ft/b4RCGEIyBwV7EX4JV3/uxrdd29zTHItgBCs7RERgcL9A4NptF27iiWwuFibi4kspQaNTVrgN/ZfYN4jtwtOyfXKRmUftYuTBXtE3O3+DrNn2aKh5jWAz2pZIZ3W4qthc9VL7Hh1sdXeQ+kaijshM6nYToLq7ikkeC3kV4vExofZWIU7KJlybUD1zSk822Tps0iAvxCCGNU8MQipDb0lLMtjX4sgPzPlUqvFA0XauJdAPmZfC6rTlU5xazXZSW8JTU1aUty7LrOvLftq3qRIjgwjaDL/TtQCdcmToDu2FetwcVCsYYIkIM78R+wAoeBO9tnbvcG65K509+vk4h59AI9qV12cTHgPDgxsg4iIIcUHCMm7I2GO02Dnn/yMAEd77yS3ePAtJZBHx5M/ikQAxcDDfJ59bHFj/ygA+EaXsayLTBVzib8Elmv4jPVSgCsl575S9RKc7xyby9zZvJJ1mo1/Fn73DlNyh1Qto+xub4z4ZIhfp0XJdKInRwhJ5OCNI/eTAanTfhsTqgeWWpNA2ImnNJrV+epqFQlGGYpjmxkG15biIwfchuDeLi9Mdn+fXNAQcde0n1ITrG0plZ28aH8tH4QazGzKRSQFjzZ/532F1ds8eUQ9Gfypr05Mw76hFtEq4r9VyILb0NBWHTMXyk+cEfsfoG5Tfkej9E13sn7bWAMy055ZJiMRrCsKdVkxHT42KyaF7FkPtS1WOnGMHSeLP0R336I8Bxpn+ali5YLYDo/k21Uz+s1QfESJsBl1Ig0vyiD63zdsGh7UUAnH3Li0sG0/qRhXE91YVjByVu8DubUFNuuGcRv9bGAJtqFuD4G0onvZvzh/DxTMeSn3/pwZqbvbBW2xbK5jC5xlZyZatu4HuG/AR1hlsGcCDQrjxgr+0vBJ7viRigVL1qjXVmmK2KTf0Ni89uqfKHLqAI91rwi/OsxJSL11MHt9w50uSaHzdipavKqz6RAA8fVKulPnwQ3Qzps8VU6o1nQoC1eEhYvEQTUklEk+s8Bh+bxlibQBTYnj7vnDyg4Q7zk3sebhSBUDYCb2XZ+CTWeVyDxXlSeNSgvsCxk+FBMw7+EkvKGV8i2/+GbOQdfxGBY7F4RaMTSUwyjUf0iUOptFCuMT65RF+AlZlOCK2eanTp6fafEEbxVL7EyIxnBFx/OQWhHhSP6Pr2Ysw1mRjc2l/oTqYlDpa0SbroegLg64RHMWtM2uMlAPnPRSHIQfGmaUxVp+aD90Lt5Rq+3r45tr0hbE+P1FCJDHHNR2IPsjl5ZPcaKZAPiubHqlPR/YyrGStKHV6nTqZEDAsSVqaXgdgFi1pJyMN7cCLpTuEldKBYe4EUWFu6CsduZDJD0mLU4v6l+EUoodR+KEc3qbPNZReazxy88BGxN00PF4PTmeaLDzxqfWXPksx1eD2/LfFFTYgeycMWc+ybuWCMJYUyrsXXxkwykWpXQlhe3WyIEMq6d3I1nXLzqHAhIGf55mYu4zqK5vzMRttBtf8urzMUiWXs7/MBOetUKTQ49PDcb1OP/RkSetHjbMvomgU/CJcChpbP0ugj5XPyG/n3cb7Xq9EySgcw27NykUNLPnTH2sexFSvgpdQoboH9YuqJWms2giSeF9Lp4HdqOPyynbjL+FIaJpdxrymU8KxgCj5x2kLJoa1N1N1+IZDcA0uw0mfPWIvC5tk7mtlM9PF26245iT64PkpvHITzbArfnH9xhGHP+aKicYgIt4Xevlj8OraPc+ib8i8cErtnaxzaCjNye7Zr7/UN6+nEgRaeecbprP+zwqF1t5R2X91xfP0UVWgav/2XAGRPB/85TRPJP/nJXeqCEngSz73zPIFVnbaRE9kih9bYX5TV8bMWzQIcZI1kmNbHXGh2zJ7EZYtvbQu0I1cvwRNnHvClbbDYCvm8SRdFayWGS+bC8n/M3CiPHUPm3q550sXf8670ntnqdMnztkbP2KN4rK3uldis433rK8Jca9aQ5PO7p19zT9Bad669Vq7aVwtLKM29wqL0f7nMWF2b3QFDy/8pxPN8EleER8FwXz5SFNkfwAEt1EkEjk7cIbGhdnNRDEuczwKdw/FyK1a/lFv8N2otCQUClr1EETiS57aW/g1nIlGmmpF6sZT1NpYGVsYw3gq2qU3R0oGdCFD3cukia1TT61RQJ9FE7mLQDouaKfMuYyhzpwF4Kyas1j6cL1+hBaj1sK5B2WpEWAaTW233PffKi1ysb1fNUAnKs0FvI0DNgevT2ketFdWfiL3Qx0wv8pjBzCtD7TTs/RJEWg72TBG8Ut+E1vMWqu0xQ89CiPvpstbiwT/WWcikS+o8GnyixlKpWAT44PCOBt610QURXoYzFFh1zanpnJ26mjElcRYyHdOLtqYB+AgYTCuWEyAw0Tgi/4UPt3Rnn4sriHikcOPKmehEpVc/g7ayepVS7Yw0gOhszuPZytwRuSJPYZdDPi5QeGqhswJVezQc1w/WHDzomhAC4yCf7+iUCRTH3M8EFuKJN5RNxbQzoAropR3TLFWFvkNAOJNriUslUsq/1dS+J02ACqQVa2tb3w08HcDxpxFuN8MrJuq+GSeym25BI7d7ukCu0my6Dcqbq4VXKr6Q7JWYoDYAcdTlUkixfqdYVL5Qic51/HAXYpp2Dwvtib6VY9JeLRQdxMeTa5t8E8rGT5fnwps1NIfY2RTQ2kIDePseBLMsLB4FpM6qAiSUjZ9PPIPVdIewEL5/N8GkLNwVZ09G9ebWVv6LTTpiCUl5e7heg4AT8PJZaiMXxBsgHEQ3CQYSxxgee1MZMh5dhrDublGAXUBkot7+qJxScpjJH6FI72C4n9s6EYK3LqfC40btpTvQpCJ34g1AKP5LvH45zNf+BRApqDQ6pQtiFaaJAjtDNJ9URHTaCwW036O0G7yS02jtXRQU18fQZzGlLOv7YYge12Isy7veBBjt0gaUlovxbKOTROkCjRbyR6bPZn89exrVZpDtsySUzatIi4+QqKpwP6IZBfES0cSbYDhdYgPXuQnxM8YrVfLlIUJ0E//OfAKWeBP0p5ZZGVE2ccMyu3wKpbeVVt2pv9I0UsrpE6wCxBTwMTt0WqIsd3C9a219nmbKe4Zp3Xane39UAbEASRXDNY5h0of4RIzodMNuj+CfkyjqMCtF0rXMTod7zMwEoZ7YjcOpkcH++ef5Ktiu3rU4Jp69QepaV1xKmJqFbzzc+C0f6OtrxKNsCyiBsyiLMQ1piKj8UrRj6wqtItd6aZnIAh/2LkNM7yJQYOvqLTxEs1iSTpYTsqI26cx16w0bV2j1GmE5V6Y+EQduK5EOPs1bVWjlaA20vEokzFUH1Qtg6BowaOMKrY1fJaxsyk3pswgpxU/Blj5OviX/REqDLJWoJHctN2vjuom+6EVV2etk/g5Xzza4tdnq2wHeBfEU5IH5d2JOPRIlxAHNRjtE/1rQnS6WsoqCh+zxc6+FQktfJb578zlGu8sEl0QWHlrRwYxEFaONnBqeKeMVYY8kXzLRyMdREXWUttkhPldH+GrtFv1Sef4NDv32p2lgsOh5apP8Cxz6lm1MjBNIz+jSf2kOidaYx6DO0rYcPlft+kftZ6lG9XyEg/NeTk57k56wFpQ0sDDwLTsvnPuN7CGfD8+tzVk/lgOes7ix1/bU1uZgF0bx2rffPJ37L9EzeUPD5DzOq3gNjwRtVe3av+i9+pQOkU/JokcYlD+zVcC083UalZ0AsFYfJFuv+ZBvHKcRpWnWtrGajgGJAegsVvSN+KLUVh9eCyfFd5x39do3u9h0K7QjWPkci8DUbHaAyJXp4ll9q84n4IP3tNY+pLpYR4ff9Epi2mfotnZu8RNqH6rEyhdNtIIpC3V0Ll5C8k0SWQOzqq7Tv9Sp+z5hpKzHPAZv8IDsf5mMmjITqjVcKrD1keYBgBmYmqhetJW9pyRq0Lr2Qole1AkdJ4OgoasD5Py+NUfFr0fkvkiylslEJVaDAc137XcTraSLC7x/W5aQPyKJ7jJYTM8mmjeY8UHvxigUZvlOefq27cfHVfmTga+zsG4eBi4DLHxErgo0d5UiViUwrpaqaLvPBox01z5s+Oiz4WpXpl1G84ZWdSWIg2N/jweFgNx0FTLSPqbGgE+BQetoXl3hilZ0CdjO2gtKFpBCCN89RKxzFWMVDK5/bOf7VM9WEEIHz1hFM4dK9PhU6V9QUjjmACB08lcR4XlSiJXSx3Ji3qbDpDTt80WN2wli1W1FN6L8DoiFYJhKCrrLylfGPu0i2sqImUIQxRt+EsFFdXfvo6iP3YUfvVs5x49rURyz03bftNhpp5122mmnnXbaaaeddtppp52+TlWBHv9YbOPDhGiB/xefbfqMU3zqvhqk7Pqs1wNVLXmzZ1At+Q1ezyiNkcxCRhAHH8lpTFNXpvoNAqSf/HcYwIV5IY2o8Tii17+8YtakBjh6P5reYoQdR6cUZ6RVs2GonAUOMULq9Cm8RS8f1DAOC0oBi8yi97+j3CLn4TBDUmmH+iscok8dkRIOBeQh7egJ0vvfpKccOmqfjlgxlS2zwiH8JIeSp5DBztUfq7IsTe2Tk0ttbUtycinLil9MQ5oe2YeTxcjRcBIUa3KYtLRh8Rt5ltwNE9FIniQJYbcm/2iNkqu19njlXmDaHP6MKAiRLZDSz3FChAP55/REP8JILsFM4zts6BdlycWIvq7+ZQelgF4xD/lFDr9AWGgcJneAx48J8VO5YvykJb3EMHDZL/4lrQ3kHw1jgzAep6MjPaDfjO5dxsDkkIKROH77wl5CewuDcaQalYYNFISykqdHgKY31QppYUHdT7w9kR2rONRqK6KxnqhKYRhXNOkl7RZrXDZYorEccXqEvBqF88NzFocPwDNFWC0dXFzpCRoYwU83SMuXkKtMZXD5aH/p2sXkf4BlcNW/41ESxmzUNbqR5XmjGXu8Pr3iMCJ9oI3SJgBLdSKPi0YijUMKN1PjRoaB2kiWrQqD45UeuDpYtDgsOOSRFqSErFxiHUGOYAsRjqs0DHOKluCn0PQ+AJs8DOuBcPCb/uTpuA7zPJ+sQ3BgOVNjgqzikEj2qQ7DMKGfKGOJw2lO82RhnuZ5qnNIpk3mJFZ4HKuIHrHTFkParymOamYdZkDpwx5woGcplATFpo/GagCq4Ortd4RxzetSwmEuBUBbh7KaH51n7hVAPXNNcEhB9IIH0i2a682EjfeA/jxRzwaHUpfSEZQoclrF00rmLHgWMJ1Chd/jKmqRQ4bKY6f0LmtBcZ0ccunmkDYy4svJq9kaJWOsasbFYJrhrqxFmHeUP1YHgHZSzSwRHgvp2fP1UCIHoH2ZQ4arpaLmtIeFHDE3h7kcAjLdTNoM5VOjaSqP7dNApuloMkAhKRCvrU+R+phXOfZ6WsVwhcOfmDQOY4PDy+EoG17kkC4fpgqJvWR2h1Ww1bs68VhsvzQWvdFKA5EfmfBnWFwWHB6AI2d9jUMGwMVdKTlMj0yL8oaXOSSagnHWcVPBDIje00mBaMYh+3YffcmVd5dmaxdHjSgwu6eavmA1PIp35vAnpZwg+uaRQ6JfybaDNbzKIbUR1POjz9BfGfxM7+nVht3S9wwNJQoJFBktrWN90bYQH4H7G+vwRwx8wDkkkymh7WR6Vzikenyg+oqbVby2c9T80kypaloXwlZKZN1IUHDMV7SpS7Xhce8t5PMCts84vKvusxla5pAZjHSQ/RvAClpasxbUORAJkERZAvmZyPEL7pRD/lf6+YxRZ5n2cPxzBZ1ZeDqHIj9YOCxC1Cs1YkAfY51DKmu0e3wQqQ2UNTZqB6+6PayU381UFDwTtyS8PCDbDzBDxt7J8Ogjh1R0iTeYjD4NYoqcCgDtT27qIINDntjNOGzoiLDRZBkonMNhLKwZtjaHvP63TCemLeGM7HfC5IYdNW8Mi3+AsrwqcxUgZj4n3w8wvuKmyRhGiNsdhmkmTilDqHGvkL4TFYW1mTY5DNU6HLt8aJqBNcw5LJlncA1+c4vDEb2rUiFYGi7Zm7D/B78rXht1ZrmSaBVyEI0KqB49YwQA1YPCsrZaQhNvKBk1uOUjmhz+JEhwSJjhDaNrL9fhzwMydcSKmxocspQdLSUl1UrIOr5ImRlbLrIzkFuC8BSwXRdEoph3PtALCB+T7hf+ijeGNzBefkiG6iu9gs2MisMvNFDDLfmdz3J1HFvowxhD+e2LmL2c5YFl5LJiiexSseFktUc83hs5cFl095ybv6ptZF12507vZt52HS2plldVpT1F7uvMYEBCbrRcgYQ8Y9xTV5XsUEJaaNPxJtn38DJeHC/nRksWK/mlPHft/3fQeKeddtppp5122mmnnf5J+h/83OREZEkfIgAAAABJRU5ErkJggg==",
        tag: "React Native",
      },
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        tag: "JavaScript",
      },
      {
        url: "https://www.geekandjob.com/uploads/wiki/2bd3b3fa67901570a8c9fc64ba155cc5fb9f026f.png",
        tag: "Laravel Lumen",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        tag: "Laravel",
      },
      {
        url: "https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png",
        tag: "MS SQL Server",
      },
    ],
    desp: [
      "Uses React Native as the core mobile framework & Laravel Lumen as the core backend framework",
      "Manage employee bulletin & company wide notification service",
      "Included Overtime Request System & Anyother HR related administration",
      "Implement WebView for specific use case of the bulletin",
      "Uses Microsoft SQL Server for primary database and GORM as its ORM",
      "Deployed to Play Store & App Store",
    ],
    Previewlink: "https://apps.apple.com/id/app/iam-pusri/id1587664504",
    Githublink: "",
  },
  {
    title: "Dashboard Pusri (Fullstack & Mobile)",
    cardImage: "assets/images/project-page/dashboard.png",
    description:
      "A data visualization app for the board of director and top management, mostly handles summary of the company operation/production, health, KPI, HR, and many other indicators",
    tagimg: [
      {
        url: "data:image/png;base64,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",
        tag: "React Native",
      },
      {
        url: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        tag: "React",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        tag: "JavaScript",
      },
      {
        url: "https://www.geekandjob.com/uploads/wiki/2bd3b3fa67901570a8c9fc64ba155cc5fb9f026f.png",
        tag: "Laravel Lumen",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        tag: "Laravel",
      },
      {
        url: "https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png",
        tag: "MS SQL Server",
      },
    ],
    desp: [
      "Uses React Native as the core mobile framework & Laravel Lumen as the core backend framework",
      "Consume data through multiple pipelines, consists of APIs & WebSockets",
      "Uses AmCharts 3, Google Map, and RN-Chart-Wrapper for data visualization",
      "Uses Microsoft SQL Server for primary database and GORM as its ORM",
      "Deployed to Play Store & App Store",
    ],
    Previewlink: "https://apps.apple.com/id/app/dashboard-pusri/id1575659375",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({
      title,
      description,
      desp,
      tagimg,
      cardImage,
      Previewlink,
      Githublink,
    }) => {
      output += `       
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" loading="lazy" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
              <ul class="menu-content" style="text-align: right;margin-right: 0;margin-top: 0;position: relative;"><br>
               ${tagimg
                 .map(
                   (img) =>
                     `<li style="margin: 2px;"><img loading="lazy" src="${img.url}" width="30" height="30" alt="${img.tag}" title="${img.tag}"></li>`
                 )
                 .join("")}
              </ul>
            </div>
            ${description}. Additional detail of this project can be seen below:
            <ol>
              ${
                desp && desp.length > 0
                  ? desp.map((poin) => `<li>${poin}</li>`).join("")
                  : ""
              }
            </ol>
          </header>
          <ul class="menu-content" style="bottom: 0;"><br>
            ${
              Previewlink.length
                ? `<li><a target="_blank" href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>`
                : ""
            }
            ${
              Githublink.length
                ? `<li><a target="_blank" href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>`
                : ""
            }
          </ul>
        </article>
      </div>
    </div>`;
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
