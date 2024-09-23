import lastwork1 from '../assets/lastwork1.png'
import lastwork2 from '../assets/lastwork2.png'
import lastwork3 from '../assets/lastwork3.png'
import lastwork4 from '../assets/lastwork4.png'
import lastwork5 from '../assets/lastwork5.png'
import lastwork6 from '../assets/lastwork6.png'

const data = [
  {
    id: 1,
    img: lastwork1,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
  {
    id: 2,
    img: lastwork2,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
  {
    id: 3,
    img: lastwork3,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
  {
    id: 4,
    img: lastwork4,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
  {
    id: 5,
    img: lastwork5,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
  {
    id: 6,
    img: lastwork6,
    title: 'Project title',
    desc: 'UI, Art drection'
  },
]


const LastestWork = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <h1 className='font-bold text-3xl text-center'>Latest work</h1>
      <div className='grid grid-cols-3 mt-16 gap-10'>
        {
          data.map((e) => (
            <div key={e.id}>
              <img src={e.img} width={394} height={330} />
              <p>{e.title}</p>
              <p>{e.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LastestWork