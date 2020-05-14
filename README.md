## Installing dependencies
1. run **npm i**

## Build the site:

run **npm run build:prod**. This creates a **dist** folder in the current working directory if not already present and builds all the files (css, js and html *(css and js are minified and html is renndered from ejs views and rest are copied)*).

## Serve Files:

run **npm run serve**. This creates a **dist** folder in current working directory if not already present and copies all necessary fies (css, js and html) and renders ejs views and serves the **dist** folder's content. **Port** can be configured by changing the value of **-p** flag in package.json at **serve script**. For extra server configuration see https://www.npmjs.com/package/http-server .

## Edit YAMl files
Currently only content for blogs, and projects along with their stories can be added through yaml file content.

Stories are nested inside project content with respect to their own projects.

> Each file must have an id that should be a number. (sorting is done on this id)

all other keys are same scross the same the folder.

All **Blog Files** have the same key which is required for proper rendering of html.
**Keys:** 
**id**, **tag**(*tag of the blog*), **searchTags**(*text that can be used to search this blog*), **imageUrl**, **srcSetUrls**(*src set urls of image*), **alt**(*alt name for the image*), **readTime**(*read time of the blog, specify min or hours in text*), **heading**(*heading of the blog*), **previewText**(*text that appears on the blog card*), **featured**(*boolean: whether to show current blog in home page*), **post**, **creator**, **name**(*name of the creator*), **designation**(*designation of the creator*), **about**(*info about the creator*), **email**(*email of creator*), **twitterUrl**(*social link of creator*), **linkedInUrl**(*social link of creator*), **createdOn**(*ceration date of the blog*), **entryPara**(*first paragraph of the blog; differently styled*), **quoteText**(*text that goes inside the quotes*), **content**, **heading**(*paragraph heading*), **paras**(*paragraph content*).

All **Project Files** too have the same key across the files.
**Keys:**
**id**, **clientName**, **industry**, **projectName**, **heading**, **description**, **tag**(*tag of the project*), **exploreName**(*industry name or any name with hash tag for explore section*), **card**, **imageUrl**(*image url for the project card*), **imageSrcSetUrl**(*image src set urls for the project card*), **altName**(*alt name for the project card image*), **backgroundStyle**(*style for the project card image,* **can be copied** *or change the linear gradient and urls*), **mastImageStyle**(*style for the project page mast background image,* **can be copied**), **background**(*text explaining the background of the project*), **challenges**, **info**(*challenges text of the project*), **steps**(*steps to resolve challenges of the project*), **approach**, **heading**(*appraoch heading*), **text**(*appraoch text*), **solution**(*solution text*), **technologies**(*technologies used in the project*), **ssHeaderImageUrl**(*image url for header above stories cards*), **ssHeaderImageSrcSetUrl**(*image src set urls for header*), **ssHeaderImageAlt**(*alt name for image of header*), **stories**, **data**, **userImageUrl**(*image url of the story user*), **userImageSrcSetUrl**(*image src set urls of the story user*), **userName**(*name of the story user*), **userDesignation**(*designation of the story user*), **heading**(*story heading*), **info**(*story text*), **featured**(*boolean: whether to show current story in home page*).

values that blog -> tag can take:
> pm(product management); dev(devops & sre); per(performance); ux(UX); app(applications); sta(startup). *without parenthesis and the text inside it*.

values that project -> tag can take:
> hel(Health); tec(Technology); ai(Artificial Intelligence); met(Media & Entertainment); fin(Finance); enr(Energy). *without parenthesis and the text inside it*.

values that project -> technologies can take:
> redux; java; react; spring; node; python; postgres
