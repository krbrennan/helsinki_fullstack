
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let total = blogs.reduce((acc, value) => {
        return acc + value.likes
    }, 0)
    return total
}

const favoriteBlog = (blogs) => {
    let result = {}
    let maxLikes = 0

    blogs.forEach((blog) => {
        if(blog.likes > maxLikes){
            result = {
                "title": blog.title,
                "author": blog.author,
                "likes": blog.likes
            }
            maxLikes = blog.likes
        }
    })
    return result
}


const mostBlogs = (blogs) => {
    result = {}
    let number = 0
    let tempNumber = 0

    for(i=0;i<blogs.length;i++){

        for(k=1; k<blogs.length; k++){
            if(blogs[k].author == blogs[i].author){
                tempNumber++
            }
        }
        if(tempNumber > number){
            number = tempNumber
            result = {
                "author": blogs[i].author,
                "blogs": number
            }
        }
        tempNumber = 0
    }
    return result
}

const mostLikes = (blogs) => {
    let result = {}
    let likes = 0
    let tempLikes = 0

    for(i=0;i<blogs.length;i++){
        tempLikes += blogs[i].likes
        for(k=i+1; k<blogs.length; k++){
            if(blogs[k].author == blogs[i].author){
                tempLikes += blogs[k].likes
            }
        }
        if(tempLikes > likes){
            likes = tempLikes
            result = {
                "author": blogs[i].author,
                "likes": likes
            }
        }
        tempLikes = 0
    }
    return result
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}