/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    document.querySelector('.sidebar-toggle.visible-xs').addEventListener('click', () => {
      const bodyPanel = document.getElementById('body__panel');
      if(bodyPanel.className === 'skin-blue sidebar-mini app sidebar-open sidebar-collapse') {
        bodyPanel.className = 'skin-blue sidebar-mini app';
        return
      } else {
        bodyPanel.className = 'skin-blue sidebar-mini app sidebar-open sidebar-collapse';
      }
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item.menu-item_login').addEventListener('click', (e) => {
      App.getModal('login').open();
    });
    document.querySelector('.menu-item.menu-item_register').addEventListener('click', (e) => {
      App.getModal('register').open();
    })
  }
}