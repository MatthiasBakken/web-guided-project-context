import React, {useContext} from "react";
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
  const value = useContext(FamilyContext)
  return (
    <section className="parents">
      {value.activeFamily.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;