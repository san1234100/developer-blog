import postData from './../postData'

const posts = [...postData].map( post =>{
  const { id, title, topic, desc, author, publishedDuration } = post;
  return(
    <>
      <a href='#' className="card-posts" key={id}>
                <img src="./src/assets/images/bg-hero.jpg" alt="bg-hero" />
                <h1 className="card-title pt-3 pb-2">{title}</h1>
                <span className="bg-[#3652AD] text-white font-semibold px-4 py-1 rounded">{topic}</span>
                <p className="pb-3 text-[#0F2167] pt-2">{desc}</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#0F2167]">{author}</p>
                   <p className="font-medium text-[#0F2167]">{publishedDuration}</p>
                </div>
            </a>
    </>
  )
})
console.log(postData);
const PostPage = () =>{
    return (
        <main className="p-10 bg-slate-300">
          <h1 className="font-semibold text-2xl text-[#1B1A55]">Latest posts</h1>
          <div className="grid grid-cols-3 gap-10 mt-10">
            {posts}
            <a href='/' className="card-posts">
                <img src="./src/assets/images/bg-hero.jpg" alt="bg-hero" />
                <h1 className="card-title pt-3 pb-2">Learn how to build an website using node js</h1>
                <span className="bg-[#3652AD] text-white font-semibold px-4 py-1 rounded">Web Development</span>
                <p className="pb-3 text-[#0F2167] pt-2">Explore the dynamic world of web development, from intricate backend structures to captivating frontend designs.</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#0F2167]">Shriram</p>
                   <p className="font-medium text-[#0F2167]">4 months ago</p>
                </div>
            </a>
            <a href='/' className="card-posts">
                <img src="./src/assets/images/bg-hero.jpg" alt="bg-hero" />
                <h1 className="card-title pt-3 pb-2">Learn how to build an website using node js</h1>
                <span className="bg-[#3652AD] text-white font-semibold px-4 py-1 rounded">Web Development</span>
                <p className="pb-3 text-[#0F2167] pt-2">Explore the dynamic world of web development, from intricate backend structures to captivating frontend designs.</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#0F2167]">Shriram</p>
                   <p className="font-medium text-[#0F2167]">4 months ago</p>
                </div>
            </a>
            <a href='/' className="card-posts">
                <img src="./src/assets/images/bg-hero.jpg" alt="bg-hero" />
                <h1 className="card-title pt-3 pb-2">Learn how to build an website using node js</h1>
                <span className="bg-[#3652AD] text-white font-semibold px-4 py-1 rounded">Web Development</span>
                <p className="pb-3 text-[#0F2167] pt-2">Explore the dynamic world of web development, from intricate backend structures to captivating frontend designs.</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#0F2167]">Shriram</p>
                   <p className="font-medium text-[#0F2167]">4 months ago</p>
                </div>
            </a>

          </div>
        </main>
    )
}

export default PostPage;