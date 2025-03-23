import { useState } from 'react'
import { Compass, Film, Heart, House, Menu, Search, Send, SquarePlus } from 'lucide-react'
import PostCard from './components/PostCard'


const navLinks = [
  {
    id:'1',
    title:'Home',
    icon:<House/>
  },
  {
    id:'2',
    title:'Search',
    icon:<Search/>
  },
  {
    id:'3',
    title:'Explore',
    icon:<Compass/>
  },
  {
    id:'4',
    title:'Reels',
    icon:<Film/>
  },
  {
    id:'5',
    title:'Messages',
    icon:<Send className='rotate-12'/>
  },
  {
    id:'6',
    title:'Notifications',
    icon:<Heart/>
  },
  {
    id:'7',
    title:'Create',
    icon:<SquarePlus/>
  },
  {
    id:'8',
    title:'Profile',
    icon:(
        <img
          src='/insta-profile.jpg'
          alt='user'
          className='rounded-full object-cover overflow-hidden'
        />
    )
  },
  
]
function App() {
  const [activeTabId, setActiveTabId] = useState('1')

  return (
   <>
    <main className='h-screen relative overflow-y-scroll flex sm:flex-row flex-col bg-black text-white'>
      <div className='sm:block hidden h-screen w-44 md:w-60'>
        <aside className='h-full w-44 md:w-60 fixed top-0 left-0 bg-black flex flex-col justify-between px-3 pt-2 pb-5 border-r border-white/15'>
          <div>
            <div className='px-3 pb-4 pt-8 mb-5 w-32'>
              <img
                src='/insta-text-logo.png'
                alt='Instagram'
              />
            </div>
            <ul className='space-y-1.5'>
              {
                navLinks.map(({id,icon,title},i)=>{
                  const isActive = activeTabId === id
                  return(
                    <li
                      key={i}
                      onClick={()=>setActiveTabId(id)}
                      className={`p-3 group flex items-center gap-4 cursor-pointer rounded-3xl hover:bg-white/10 ${isActive && 'font-bold **:stroke-3'} active:bg-white/5 transition-all duration-200`}
                    >
                      <div className='relative'>
                        <span className=' *:size-6'>{icon}</span>
                        {title === 'Messages' && <div className='absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 bg-red-500 border-2 group-hover:border-current border-black size-[18px] flex justify-center items-center rounded-full text-[10px] '>2</div>}
                        {title === 'Notifications' && <div className='absolute right-0 top-0 translate-x-1/4 bg-red-500 border-2 group-hover:border-current border-black size-3 rounded-full'/>}
                      </div>
                      {title}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div 
          onClick={()=>setActiveTabId('11')}
          className={`p-3 flex items-center gap-4 *:size-6 text-white cursor-pointer rounded-3xl hover:bg-white/10 ${(activeTabId === '11') && 'font-bold *:stroke-3'} active:bg-white/5 transition-all duration-200`}
          >
            <Menu/>More
          </div>
        </aside>
      </div>
      <div className='z-40 sticky top-0 left-0 bg-black sm:hidden px-3 py-3  w-full'>
            <img
              src='/insta-text-logo.png'
              alt='Instagram'
              className='w-32'
            />
      </div>

      <div className='flex-1 '>
        <section className='sm:w-[470px] lg:w-[630px] mx-auto px-3 sm:px-8 lg:px-20'>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </section>
      </div>
    </main>
   </>
  )
}

export default App
