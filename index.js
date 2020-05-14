const fs = require('fs');
const path = require('path')
const ejs = require('ejs');

const { loadData } = require('./loadFiles')

const blogsDirectory = __dirname + '/blogs/'
const projectsDirectory = __dirname + '/projects/'

loadData(blogsDirectory).then(blogsData => {
    loadData(projectsDirectory).then(projectsData => {
        const _blogs = blogsData.sort((a, b)=> parseInt(a.id) - parseInt(b.id))
        const _projects = projectsData.sort((a, b)=> parseInt(a.id) - parseInt(b.id))

        const _featuredStories = []
        
        const projectsWithFeaturedStories = _projects.map(p => p.stories.filter(story=> story.featured)).filter(p => p.length > 0)
        projectsWithFeaturedStories.forEach(proj=> {
            proj.forEach(story=> _featuredStories.push(story))
        })

        const ejsFiles = [
            {name: 'index', data: { _projects, _blogs, _featuredStories }},
            {name: 'blogs', data: { _blogs }},
            {name: 'projects', data: { _projects }}
        ]

        ejsFiles.forEach(ejsFile => {
            ejs.renderFile(path.join(__dirname, `./views/${ejsFile.name}.ejs`), ejsFile.data, (err, result) => {
                if (err) {
                    console.log('info', 'error encountered: ' + err);
                    throw err;
                }
                else {
                    try {
                        fs.writeFileSync(`./dist/${ejsFile.name}.html`, result, 'utf8');
                    } catch(err) {
                        if (err) {
                            console.log('info', 'error encountered: ' + err);
                            throw err;
                        }
                    }
                }
            });
        })
    })
})
