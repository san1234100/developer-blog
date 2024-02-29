const PostPage = () =>{
    return (
        <main className="p-10 bg-slate-300 h-screen">
          <h1 className="font-semibold text-2xl">Latest posts</h1>
          <div className="grid grid-cols-5 gap-10 mt-10">
            <div className="card-posts">
                <img src="./src/assets/images/bg-hero.jpg" alt="bg-hero" />
                <h1 className="card-title pt-3 pb-2">Learn how to build an website using node js</h1>
                <span className="bg-[#3652AD] text-white font-semibold px-4 py-1 rounded">Web Development</span>
                <p className="pb-3 text-[#0F2167] pt-2">Explore the dynamic world of web development, from intricate backend structures to captivating frontend designs.</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#0F2167]">Shriram</p>
                   <p className="font-medium text-[#0F2167]">4 months ago</p>
                </div>
            </div>
           
          </div>
        </main>
    )
}

export default PostPage;