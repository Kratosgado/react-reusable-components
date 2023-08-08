import {ComponentPropsWithoutRef} from 'react'

type Props<Data> = {
   data: Data[];
   id: keyof Data;
   primary: keyof Data;
   secondary: keyof Data;
} & ComponentPropsWithoutRef<'ul'>;

export function Checklist<Data>({ data, id, primary, secondary, ...ulProps }: Props<Data>) {
   return (
      <ul
         {...ulProps}
         className="rounded bg-gray-300 p-10">
         {
            data.map((item) => {
               const idValue = item[id] as unknown;
               if (
                  typeof idValue !== 'string' &&
                  typeof idValue !== 'number'   
               ) { return null }
               const primaryText = item[primary] as unknown;
               if (typeof primaryText !== 'string') return null;
               const secondaryText = item[secondary] as unknown;
               
               return (
                  <li
                     key={idValue}
                     className="p-6 bg-white shadow rounded mb-4 last:mb-0"
                  >
                     <div className="text-xl text-gray-800 pb-1">
                        {primaryText}
                     </div>
                     {typeof secondaryText === 'string' && (
                        <div className="text-sm text-gray-500">
                           {secondaryText}
                        </div>
                     )}
                  </li>
               )
            })
         }
      </ul>
   )
}