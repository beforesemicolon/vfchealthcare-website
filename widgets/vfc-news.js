export default {
   id: "vfc-news",
   title: "News",
  inputs: [
    {
      name: "announcements",
      type: "list",
      definitions: [
        {
          type: "group",
          definitions: [
            {
              name: "date",
              type: "text",
              value: "May 3rd 2024",
            },
            {
              name: "title",
              type: "text",
              value: "VFC is Now accepting Tufts insurance for homecare services",
            },
            {
              name: "description",
              type: "text",
              value: "We are happy to announce that after months of working Tufts team, we are now accepting their insurance as in-network care provider and this change will allow us to help more patients. Please give us a call today!",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "date",
              type: "text",
              value: "May 3rd 2024",
            },
            {
              name: "title",
              type: "text",
              value: "We are now taking patients from Rhode Island",
            },
            {
              name: "description",
              type: "text",
              value: "Excited to welcome patients from Rhode Island and expanding operations so we can cover more ground and help more people. Give us a call today.",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "date",
              type: "text",
              value: "May 3rd 2024",
            },
            {
              name: "title",
              type: "text",
              value: "VFC is Now accepting Tufts insurance for homecare services",
            },
            {
              name: "description",
              type: "text",
              value: "We are happy to announce that after months of working Tufts team, we are now accepting their insurance as in-network care provider and this change will allow us to help more patients. Please give us a call today!",
            }
          ]
        }
      ]
    },
    {
      name: "posts",
      type: "list",
      definitions: [
        {
          type: "group",
          definitions: [
            {
              name: "title",
              type: "text",
              value: "FDA approves Johnson & Johnson’s ketamine-derived nasal spray for depression as stand-alone treatment",
            },
            {
              name: "description",
              type: "text",
              value: "Major depressive disorder affects an estimated 8.3% of the adult population. And now there’s a new option for treatment: Spravato, a…",
            },
            {
              name: "link",
              type: "text",
              value: "https://www.fda.gov/news-events/press-announcements/fda-approves-johnson-johnsons-ketamine-derived-nasal-spray-depression-stand-alone-treatment",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "title",
              type: "text",
              value: "FDA approves Johnson & Johnson’s ketamine-derived nasal spray for depression as stand-alone treatment",
            },
            {
              name: "description",
              type: "text",
              value: "Major depressive disorder affects an estimated 8.3% of the adult population. And now there’s a new option for treatment: Spravato, a…",
            },
            {
              name: "link",
              type: "text",
              value: "https://www.fda.gov/news-events/press-announcements/fda-approves-johnson-johnsons-ketamine-derived-nasal-spray-depression-stand-alone-treatment",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "title",
              type: "text",
              value: "FDA approves Johnson & Johnson’s ketamine-derived nasal spray for depression as stand-alone treatment",
            },
            {
              name: "description",
              type: "text",
              value: "Major depressive disorder affects an estimated 8.3% of the adult population. And now there’s a new option for treatment: Spravato, a…",
            },
            {
              name: "link",
              type: "text",
              value: "https://www.fda.gov/news-events/press-announcements/fda-approves-johnson-johnsons-ketamine-derived-nasal-spray-depression-stand-alone-treatment",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "title",
              type: "text",
              value: "FDA approves Johnson & Johnson’s ketamine-derived nasal spray for depression as stand-alone treatment",
            },
            {
              name: "description",
              type: "text",
              value: "Major depressive disorder affects an estimated 8.3% of the adult population. And now there’s a new option for treatment: Spravato, a…",
            },
            {
              name: "link",
              type: "text",
              value: "https://www.fda.gov/news-events/press-announcements/fda-approves-johnson-johnsons-ketamine-derived-nasal-spray-depression-stand-alone-treatment",
            }
          ]
        },
        {
          type: "group",
          definitions: [
            {
              name: "title",
              type: "text",
              value: "FDA approves Johnson & Johnson’s ketamine-derived nasal spray for depression as stand-alone treatment",
            },
            {
              name: "description",
              type: "text",
              value: "Major depressive disorder affects an estimated 8.3% of the adult population. And now there’s a new option for treatment: Spravato, a…",
            },
            {
              name: "link",
              type: "text",
              value: "https://www.fda.gov/news-events/press-announcements/fda-approves-johnson-johnsons-ketamine-derived-nasal-spray-depression-stand-alone-treatment",
            }
          ]
        }
      ]
    },
    {
      name: "postHighlight",
      type: "group",
      definitions: [
        {
          name: "title",
          type: "text",
          value: "Navigating Eating During the Holidays as a Diabetic",
        },
        {
          name: "description",
          type: "text",
          value: "The holidays are filled with many delicious foods that just make you emotionally feel good. Portions tend to be more than moderate and …",
        },
        {
          name: "link",
          type: "text",
          value: "",
        },
        {
          name: "thumbnail",
          type: "text",
          value: "https://www.vfc.com/assets/images/featured-posts/featured-post-1.jpg",
        }
      ]
    }
  ],
  style: ({env}) => `
#news {
 display: flex;
 flex-wrap: wrap;
 padding-top: 25px;
 padding-bottom: 25px;
 justify-content: flex-start;
}

#news > * {
 flex: 1;
 min-width: 100%;
}

#news #announcements,
#news .news-block.limited {
 min-width: 50%;
}

#news .view-more-btn {
 font-weight: bold;
 display: inline-flex;
 align-items: center;
 gap: 2px;
 text-transform: capitalize;
 border-top: 1px solid;
 padding: 5px 20px;
 cursor: pointer;
 margin: 20px auto 0;
}

/* #announcements*/

#news #announcements {
 background: #30354f;
 color: #fff;
 padding: 20px 30px;
 border-radius: 3px;
}

#news #announcements h2 {
 font-size: 2rem;
 border-bottom: 2px solid #fff;
 margin: 0;
 align-self: normal;
 width: 100%;
}

#news #announcements .content {
 max-height: 480px;
 overflow: auto;
}

#news #announcements .announcement {
 margin: 30px 0;
}

#news #announcements .content > .announcement:nth-of-type(3n) {
 display: none;
}

#news #announcements .content:has(input:checked) > .announcement:nth-of-type(3n) {
 display: block;
}

#news #announcements .content:has(input:checked) .view-more-btn {
 display: none;
}

#news #announcements .announcement h3 {
 font-size: 1.2rem;
 margin-top: 16px;
 margin-bottom: 10px;
 line-height: 140%;
 padding-right: 20%;
}

#news #announcements .announcement p {
 font-size: 0.8rem;
}

#news #announcements .announcement .datetime time {
 background: #fff;
 color: #222;
 padding: 4px 12px;
 border-radius: 20px;
 font-weight: bold;
}

/* .news-block */

#news .news-block {
 display: flex;
 flex-wrap: wrap;
 gap: 30px;
}

#news .news-block.limited {
 padding: 30px 0 0 30px;
 display: flex;
 flex-direction: column;
}

#news .news-block.limited .news-post {
 max-width: 100%;
}

#news .news-post.highlight {
 margin: 30px 0;
 display: flex;
 padding: 0;
 --highlight-post-gap: 30px;
}

#news .news-post.highlight > * {
 flex: 1;
}

#news .news-post.highlight .details {
 padding: var(--highlight-post-gap);
 max-width: calc(50% + (var(--highlight-post-gap) / 2));
}

#news .news-post.highlight .thumbnail {
 position: relative;
 overflow: hidden;
 background: #eee;
 max-width: 50%;
}

#news .news-post.highlight .thumbnail img {
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 min-width: 100%;
 min-height: 100%;
}

#news .news-post {
 background: #f4f6ff;
 padding: 25px;
 border-radius: 5px;
}

#news .news-block .news-post {
 max-width: calc(50% - 15px);
}

#news .news-block .news-post:nth-of-type(7n) {
 display: none;
}

#news .news-block:has(input:checked) .news-post:nth-of-type(7n) {
 display: block;
}

#news .news-block:has(input:checked) .view-more-btn {
 display: none;
}

#news .news-post p {
 font-size: 0.8rem;
}

#news .news-post a {
 text-transform: capitalize;
 color: var(--vfc-highlight-color);
 display: flex;
}

#news .news-post a::after {
 content: '';
 display: inline-block;
 width: 20px;
 height: 20px;
 margin-left: 3px;
 background: url("${env.assetsOrigin || '/'}assets/icons/ext-link.icon.svg") no-repeat center right;
 background-size: 18px;
}

@media screen and (max-width: 1024px){
 #news #announcements,
 #news .news-block.limited {
  min-width: 100%;
 }
 
 #news .news-block.limited {
  padding: 30px 0;
 }
}

@media screen and (max-width: 680px) {
 #news .news-block .news-post {
  max-width: 100%
 }
 
 #news .news-post.highlight {
  flex-direction: column-reverse;
 }
 
 #news .news-post.highlight .thumbnail,
 #news .news-post.highlight .details {
  max-width: 100%;
 }
 
 #news .news-post.highlight .thumbnail {
  min-height: 150px;
 }
}

    `,
  render: ({announcements, posts, postHighlight}) => {
     const [post1, post2, ...restOfPosts] = posts;
     
     return `
<main id="news" class="wrapper">
<div id="announcements">
   <h2>Announcements</h2>
   <div class="content">
    ${announcements.map(announcement => `
      <div class="announcement">
       <p class="datetime"><time datetime="05-03-2024">${announcement.date}</time></p>
       <h3>${announcement.title}</h3>
       <p>${announcement.description}</p>
      </div>
      `).join('')}
    ${announcements.length > 2 ? `
      <label aria-label="view more button" class="view-more-btn" role="button" tabindex="0">
     <input type="radio" style="display: none;" >
     <span>view more</span>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px">
      <path fill="#fff" d="M17.98,8.16c-.17-.33-.52-.55-.9-.55H6.92c-.38,0-.73.22-.9.55-.17.34-.13.75.1,1.05l5.08,6.78c.19.25.49.4.8.4s.61-.15.8-.4l5.08-6.78c.23-.3.27-.71.1-1.05Z"/>
     </svg>
    </label>
    ` : ''}
   </div>
  </div>
  <div class="news-block limited">
    ${[post1, post2].map(post => `
     <div class="news-post">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="${post.link}" target="_blank">read more</a>
     </div>
    `).join('')}
  </div>
  <div class="news-post highlight">
   <div class="details">
    <h3>${postHighlight.title}</h3>
    <p>${postHighlight.description}</p>
    <a href="${postHighlight.link}" target="_blank">read more</a>
   </div>
   <div class="thumbnail">
    <img src="${postHighlight.thumbnail}" alt="${postHighlight.title}">
   </div>
  </div>
  <div class="news-block">
    ${restOfPosts.map(post => `
     <div class="news-post">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="${post.link}" target="_blank">read more</a>
     </div>
    `).join('')}
   ${restOfPosts.length > 3 ? `
    <label aria-label="view more button" class="view-more-btn" role="button" tabindex="0">
      <span>view more</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px">
       <path d="M17.98,8.16c-.17-.33-.52-.55-.9-.55H6.92c-.38,0-.73.22-.9.55-.17.34-.13.75.1,1.05l5.08,6.78c.19.25.49.4.8.4s.61-.15.8-.4l5.08-6.78c.23-.3.27-.71.1-1.05Z"/>
      </svg>
      <input type="radio" style="display: none;">
    </label>
   ` : ''}
  </div>
</main>
  `
  }
}
