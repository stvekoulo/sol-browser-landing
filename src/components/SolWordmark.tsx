// Point de compatibilité pour les anciennes compositions utilisant le mot-symbole.
export function SolWordmark({className='block h-auto w-full'}:{className?:string}) {
  return <span className={className} aria-label="Sol"><img src="/logo.png" alt="" className="inline-block h-[1em] w-[1em] object-contain"/><span>sol</span></span>;
}
