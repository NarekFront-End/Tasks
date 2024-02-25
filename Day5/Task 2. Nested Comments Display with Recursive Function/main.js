const commentsArr = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: [],
    },
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  
  const comments = document.getElementById("comments");
  
  function comment(commentsArr, div) {
    for (let i = 0; i < commentsArr.length; ++i) {
      const divBody = document.createElement("div");
      divBody.setAttribute("class", "comment");
  
      divBody.style.background = "#" + setBg();
  
      for (let key in commentsArr[i]) {
        if (key === "replies") {
          comment(commentsArr[i][key], divBody);
        }
  
        const p = document.createElement("p");
  
        if (key === "text") {
          p.textContent = commentsArr[i][key];
        }
  
        if (!div) {
          divBody.append(p);
        } else {
          divBody.append(p);
          div.append(divBody);
        }
      }
      if (!div) {
        comments.append(divBody);
      } else {
        comments.append(div);
      }
    }
  }
  comment(commentsArr);
  
  function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }