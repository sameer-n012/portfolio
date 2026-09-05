import React from 'react';
import './Toc.css';

const Toc: React.FC = () => {
  const sections = [
    { name: 'Skills', divID: 'skills-div' },
    { name: 'Experience', divID: 'experience-div' },
    { name: 'Projects', divID: 'projects-div' },
  ];

  const scrollTo = (elementId: string) => {
    if (elementId.startsWith('#')) {
      elementId = elementId.substring(1);
    }

    const el = document.getElementById(elementId);
    if (el) {
      console.log('Scrolling to table of contents');
      el.scrollIntoView();
    } else {
      console.log(`Cannot scroll to non-existing element #${elementId}`);
    }
  };

  return (
    <div id="toc-div" className="w-100 flex-column d-flex align-items-end">
      <div id="toc-inner-div" className="flex-column d-flex align-items-end">
        {sections.map((section, index) => (
          <div
            key={index}
            className="toc-item-div text-c1 d-flex"
          >
            <p
              className="toc-item cursor-clickable fira-code"
              onClick={() => scrollTo(section.divID)}
            >
              {section.name}
            </p>
            &nbsp; &lt;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toc;
