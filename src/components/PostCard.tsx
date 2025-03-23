import { BadgeCheck, Bookmark, Ellipsis, Heart, MessageCircle, Send, Smile, X } from "lucide-react"

const PostCard = () => {
  return (
    <main className='w-full space-y-4 pt-2 sm:pt-6 pb-4 border-b border-white/15'>
      <div className="flex justify-between items-center ">
        <p className="text-sm sm:text-base">Suggested for you</p>
        <X className="opacity-70 size-4"/>
      </div>
      <div className="text-sm flex gap-2 w-full">
          <div className="size-8 p-[1px] sm:size-10 sm:p-0.5 rounded-full flex justify-center items-center bg-gradient-to-tr from-amber-600 via-pink-600 to-fuchsia-600 from-30% via-60%">
            <img src="/insta-profile.jpg" alt="user" className="rounded-full border sm:border-2 border-black size-full object-cover overflow-hidden" />
          </div>
          <div className="text-sm sm:text-base">
            <ul className="flex gap-1 ">
              <li className="font-bold flex items-center gap-0.5 ">sam.williams12 <BadgeCheck className="size-4 fill-blue-500 text-black"/></li>
              <li className="opacity-70">•</li>
              <li className="text-white/50">1w</li>
              <li className="opacity-70">•</li>
              <li className="text-blue-600 font-bold">Follow</li>
            </ul>
            <h4>Original Audio</h4>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Ellipsis/>
          </div>
      </div>
      <div className="w-full overflow-hidden rounded-xl border border-white/15 bg-black flex justify-center ">
        <img 
          src="/post.png"
          alt="post"
        />
      </div>
      <section className="space-y-1.5 text-xs sm:text-sm">
        <div className="flex justify-between  ">
          <div className="flex gap-4 items-center *:hover:opacity-50 *:transition-all *:cursor-pointer">
            <Heart/>
            <MessageCircle/>
            <Send className="rotate-12"/>
          </div>
          <Bookmark className="hover:opacity-50 transition-all cursor-pointer"/>
        </div>
        <div className="flex gap-3 ">
          <div className="*:size-4 *:-mr-2 *:border-1 *:border-black *:object-cover *:rounded-full *:overflow-hidden *:inline-block">
            <img
              src="/insta-profile.jpg"
              alt="user"
            />
            <img
              src="/insta-profile.jpg"
              alt="user"
            />
          </div>
          <p>Liked by <span className="font-bold">thisizlondon</span> and <span className="font-bold">others</span></p>
        </div>
        <p className="flex items-center gap-0.5 "><span className="font-bold ">johny_wiz32</span> <BadgeCheck className="size-4 fill-blue-500 text-black"/> Thankful for inner peace</p>
        <p className="opacity-60">View all 93 comments</p>
        <div className="opacity-60 flex justify-between">
          <p>Add a comment...</p>
          <Smile className="size-3.5"/>
        </div>
      </section>
    </main>
  )
}

export default PostCard