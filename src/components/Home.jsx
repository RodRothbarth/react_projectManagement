import img from '../assets/no-projects.png'

export function Home({create}) {
 return (
  <section>
      <img src={img} alt="no-project" className='w-16 h-16 object-contain mx-auto'/>
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={create} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Create new project</button>
  </section>
 );
}
