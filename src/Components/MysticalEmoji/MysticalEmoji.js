import React from 'react';

export default function MysticalEmoji({ mysticalCreature }) {
  return (
    <div className='creatures'>
      {mysticalCreature === 'fairy' && <p>🧚</p>}
      {mysticalCreature === 'mermaid' && <p>🧜‍♀️</p>}
      {mysticalCreature === 'dragon' && <p>🐉</p>}
      {mysticalCreature === 'genie' && <p>🧞</p>}
    </div>
  );
}
