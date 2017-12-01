export default [
  { 'header': 'Admin' },
  { 'href': '/home', 'title': 'Home', 'icon': 'home', 'color': 'gray' },
  { 'href': '/crud/types', 'title': 'Types', 'icon': 'view_list', 'color': 'gray' },
  { 'href': '/crud/posts', 'title': 'Posts', 'icon': 'view_list', 'color': 'gray' },
  { 'href': '/crud/posts/create', 'title': 'Create Post', 'icon': 'note_add', 'color': 'gray' },

  { 'href': '/crud/comments', 'title': 'Comments', 'icon': 'view_list', 'color': 'gray' },
  { 'href': '/crud/users', 'title': 'Users', 'icon': 'people', 'color': 'gray' },

  { 'href': '/chat', 'title': 'Chat', 'icon': 'chat', 'color': 'gray' },
  {
    'title': 'Pages',
    'icon': 'domain',
    'items': [
      { 'href': '/example', 'title': 'Example', 'color': 'gray' },
      { 'href': '/about', 'title': 'About', 'color': 'gray' }
    ]
  },

  { divider: true },
  { 'header': 'Créditos' },
  { 'title': 'Solicitud',
    'items': [
      { 'href': '/solicitud', 'title': 'Nueva', 'icon': 'library_books', 'color': 'blue darken-2' },
      { 'href': '/notificar', 'title': 'Notificar', 'icon': 'library_books', 'color': 'blue darken-2' },
      { 'href': '/registrar', 'title': 'Registrar', 'icon': 'library_books', 'color': 'red darken-2' },
      { 'href': '/analisis', 'title': 'Análisis', 'icon': 'library_books', 'color': 'red darken-2' },
      { 'href': '/desembolso', 'title': 'Desembolso', 'icon': 'library_books', 'color': 'gray' }
    ]
  },
  { divider: true },
  { 'header': 'Ente Aprobador' },
  { 'href': '/aprobacion', 'title': 'Aprobación', 'icon': 'library_books', 'color': 'gray' },
  { 'header': 'System' },
  { 'href': '/settings', 'title': 'Settings', 'icon': 'settings', 'color': 'gray' },
  { 'href': '/login', 'icon': 'lock', 'title': 'Logout', 'color': 'gray' }
]
