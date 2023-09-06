document.addEventListener('DOMContentLoaded', () => {
  const buttonStyles = Array.from(document.querySelectorAll('.cat-tab'));
  const tables = Array.from(document.querySelectorAll('.timetable__table'));
  const country = Array.from(document.querySelectorAll('.country-tab'));
  const listStyles = Array.from(
    document.querySelectorAll('.timetable__head-list'),
  );
  const tablets = Array.from(document.querySelectorAll('.tablet'));

  const openButtonRight = Array.from(
    document.querySelectorAll('.timetable__head-dropdown_open-right'),
  );
  const openButtonLeft = document.querySelector(
    '.timetable__head-dropdown_open-left',
  );

  const openTabs = e => {
    e.currentTarget.classList.contains('active')
      ? e.currentTarget.classList.remove('active')
      : e.currentTarget.classList.add('active');

    console.log(e.currentTarget);

    e.currentTarget.previousElementSibling.classList.contains('active')
      ? e.currentTarget.previousElementSibling.classList.remove('active')
      : e.currentTarget.previousElementSibling.classList.add('active');
  };

  if (openButtonLeft) {
    openButtonLeft.addEventListener('click', openTabs);
  }

  if (openButtonRight.length > 0) {
    openButtonRight.forEach(open => {
      open.addEventListener('click', openTabs);
    });
  }

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

        const tableFilter = tables.filter(
          table => table.dataset.country === e.target.dataset.country,
        );
        // Добавляем событие по клику переключать таблицу в активном регионе по табам стилей
        buttonCountry.forEach(button => {
          button.addEventListener('click', e => {
            const activeButton = buttonCountry.find(button =>
              button.classList.contains('active'),
            );
            const activeTable = tableFilter.find(table =>
              table.classList.contains('active'),
            );

            if (e.target.classList.contains('active')) {
              return;
            }

            activeButton.classList.remove('active');
            e.target.classList.add('active');

            activeTable.classList.remove('active');

            tableFilter
              .find(table => table.dataset.name === e.target.dataset.name)
              .classList.add('active');
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
  }
});
