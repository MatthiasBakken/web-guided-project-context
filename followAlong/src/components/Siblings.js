import React from "react";
import { FamilyContext } from '../App';
// render props pattern - old blah garbage
// const Siblings = () => {
//   return (
//     <section className="parents">
//       <FamilyContext.Consumer>
//       {(value) => (
//         <>
//         {value.activeFamily.siblings.map((p) => (
//           <div className="person" key={p.name}>
//             <img width="150" src={p.img} alt={p.name} />
//             <strong>{p.name}</strong>
//           </div>
//         ))}
//         </>
//       )

//       }
//       </FamilyContext.Consumer>
//     </section>
//   );
// };
const Siblings = () => {
  return (
    <section className="parents">
      {family.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;