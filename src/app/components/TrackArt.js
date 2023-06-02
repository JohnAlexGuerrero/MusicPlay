
const TrackArt = ({props}) => {

  return (
    <div className='mx-1 h-32 w-32 border bg-cover bg-center rounded-full shadow-2xl p-1'>
      <img src={props.img} alt={props.name} width={100} className="w-full rounded-full"/>
    </div>
  )
}

export default TrackArt
