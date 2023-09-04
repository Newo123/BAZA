document.addEventListener('DOMContentLoaded', () => {
  const buttonStyles = Array.from(document.querySelectorAll('.cat-tab'));
  const tables = Array.from(document.querySelectorAll('.timetable__table'));
  const country = Array.from(document.querySelectorAll('.country-tab'));
  const listStyles = Array.from(
    document.querySelectorAll('.timetable__head-list'),
  );
  const tablets = Array.from(document.querySelectorAll('.tablet'));

  if (country.length > 0) {
    country[0].classList.add('active');
    listStyles[0].classList.add('active');
    buttonStyles[0].classList.add('active');
    tablets[0].classList.add('active');
    tables[0].classList.add('active');

    const buttonFiltred = buttonStyles.filter(
      button => button.dataset.country === country[0].dataset.country,
    );

    const tablesFiltred = tables.filter(
      table => table.dataset.country === country[0].dataset.country,
    );

    const initTabButton = e => {
      const activeButton = buttonFiltred.find(button =>
        button.classList.contains('active'),
      );
      if (e.target === activeButton) {
        return;
      }
      activeButton.classList.remove('active');
      e.target.classList.add('active');
      tablesFiltred.forEach(table => table.classList.remove('active'));
      tablesFiltred
        .find(table => table.dataset.name === e.target.dataset.name)
        .classList.add('active');
    };

    buttonFiltred.forEach(button => {
      button.addEventListener('click', initTabButton);
    });

    country.forEach(coun => {
      coun.addEventListener('click', e => {
        const activeCountry = country.find(c => c.classList.contains('active'));

        buttonFiltred.forEach(button => {
          button.removeEventListener('click', initTabButton);
        });

        if (e.target.classList.contains('active')) {
          return;
        }
        activeCountry.classList.remove('active');

        // Активный таб в регионе
        e.target.classList.add('active');

        // Активный список стилей
        const activeListStyle = listStyles.find(
          list => list.dataset.country === e.target.dataset.country,
        );
        listStyles.forEach(list => list.classList.remove('active'));
        activeListStyle.classList.add('active');

        // Активная кнопка в списке стилей
        const activeTab = Array.from(activeListStyle.children[0].children);
        buttonStyles.forEach(button => button.classList.remove('active'));
        activeTab[0].classList.add('active');
        const buttonCountry = buttonStyles.filter(
          button => button.dataset.country === e.target.dataset.country,
        );

        // Добавляем событие по клику переключать таблицу в активном регионе по табам стилей
        buttonCountry.forEach(button => {
          button.addEventListener('click', e => {
            const activeButton = buttonCountry.find(button =>
              button.classList.contains('active'),
            );
            console.log(activeButton);
            if (e.target.classList.contains('active')) {
              return;
            }
          });
        });

        // делаем активный таблет
        const activeTablets = tablets.find(
          t => t.dataset.country === e.target.dataset.country,
        );
        tablets.forEach(t => t.classList.remove('active'));
        activeTablets.classList.add('active');

        // Делаем активную таблицу
        const activeTable = Array.from(activeTablets.children);
        tables.forEach(t => t.classList.remove('active'));
        activeTable[0].classList.add('active');
        console.log(activeTablets);
      });
    });

    // country[0].classList.add('active');
    //   listStyles.forEach((list, i) => {
    //     if (list.dataset.country === country[0].dataset.country) {
    //       list.classList.add('active');
    //       let tabs = Array.from(list.children[0].children);
    //       tabs.forEach(tab => {
    //         if (localStorage.getItem('tableTab') === tab.dataset.name) {
    //           tab.classList.add('active');
    //         }
    //       });
    //       if (!tabs.find(tab => tab.classList.contains('active'))) {
    //         tabs[0].classList.add('active');

    //         const tablet = tablets.find(
    //           table => table.dataset.country === country[0].dataset.country,
    //         );

    //         tablet.classList.add('active');
    //         const tabletChilds = Array.from(tablet.children);

    //         tabletChilds.forEach(child => {
    //           if (
    //             child.dataset.name ===
    //             tabs.find(tab => tab.classList.contains('active')).dataset.name
    //           ) {
    //             child.classList.add('active');
    //           }
    //         });
    //       }
    //     }
    //   });
    // if (!countryStore) {

    // } else {
    //   const count =
    //     country.find(
    //       coun => coun.dataset.country === localStorage.getItem('country'),
    //     ) || country[0];
    //   const countryList =
    //     listStyles.find(
    //       list => list.dataset.country === count.dataset.country,
    //     ) || listStyles[0];
    //   const listTab = Array.from(countryList.children[0].children);
    //   const activeTab =
    //     listTab.find(
    //       tab => tab.dataset.name === localStorage.getItem('tableName'),
    //     ) || listTab[0];
    //   const activeTablet =
    //     tablets.find(
    //       tablet =>
    //         tablet.dataset.country === localStorage.getItem('activeTablet'),
    //     ) || tablets[0];

    //   const tableOnTablet = Array.from(activeTablet.children);
    //   const activeTable = tableOnTablet.find(
    //     table => table.dataset.name === activeTab.dataset.name,
    //   );

    //   activeTab.classList.add('active');
    //   count.classList.add('active');
    //   countryList.classList.add('active');
    //   activeTablet.classList.add('active');
    //   activeTable.classList.add('active');
    // }
  }

  // if (buttonStyles.length > 0) {
  //   const store = localStorage.getItem('tableTab');
  //   let activeTab = buttonStyles.forEach(button => {
  //     if (button.dataset.name === store) {
  //       button.classList.add('active');
  //     }
  //   });

  //   let activeTable = tables.forEach(table => {
  //     if (table.dataset.name === store) {
  //       table.classList.add('active');
  //     }
  //   });

  //   if (!store) {
  //     buttonStyles[0].classList.add('active');
  //     tables[0].classList.add('active');
  //   }

  //   buttonStyles.forEach(button => {
  //     button.addEventListener('click', e => {
  //       const btn = e.target;

  //       if (!btn.classList.contains('active')) {
  //         buttonStyles.forEach(btn => {
  //           btn.classList.remove('active');
  //         });
  //         localStorage.setItem('tableTab', btn.dataset.name);
  //         btn.classList.add('active');
  //       } else {
  //         return;
  //       }

  //       const tabelActive = tables.find(
  //         table => table.dataset.name === btn.dataset.name,
  //       );

  //       if (tabelActive) {
  //         tables.forEach(table => table.classList.remove('active'));
  //       }

  //       tabelActive.classList.add('active');
  //     });
  //   });
  // }
});
