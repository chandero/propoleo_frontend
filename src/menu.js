export default [
  { 'header': 'Admin' },
  { 'href': '/home', 'title': 'Home', 'icon': 'home', 'color': 'gray' },
 // { 'href': '/crud/types', 'title': 'Types', 'icon': 'view_list', 'color': 'gray' },
 // { 'href': '/crud/posts', 'title': 'Posts', 'icon': 'view_list', 'color': 'gray' },
 // { 'href': '/crud/posts/create', 'title': 'Create Post', 'icon': 'note_add', 'color': 'gray' },

 // { 'href': '/crud/comments', 'title': 'Comments', 'icon': 'view_list', 'color': 'gray' },
  { 'href': '/crud/users', 'title': 'Users', 'icon': 'people', 'color': 'gray' },

 // { 'href': '/chat', 'title': 'Chat', 'icon': 'chat', 'color': 'gray' },
 /* {
    'title': 'Pages',
    'icon': 'domain',
    'items': [
      { 'href': '/example', 'title': 'Example', 'color': 'gray' },
      { 'href': '/about', 'title': 'About', 'color': 'gray' }
    ]
  },
*/
  { divider: true },
  { 'header': 'Placement' },
  {
    'title': 'Request',
    'icon': 'library_books',
    'color': 'blue--text',
    'items': [
      { 'href': '/solicitud', 'title': 'Manage', 'icon': 'library_books', 'color': 'blue--text' },
      { 'href': '/notificar', 'title': 'Notify', 'icon': 'library_books', 'color': 'green--text' },
      { 'href': '/registrar', 'title': 'Register', 'icon': 'library_books', 'color': 'red--text' },
      { 'href': '/analisis', 'title': 'Analyze', 'icon': 'library_books', 'color': 'orange--text' },
      { 'href': '/desembolso', 'title': 'Disburse', 'icon': 'library_books', 'color': 'blue-grey--text' }
    ]
  },
  { divider: true },
  {
    'title': 'Credit',
    'icon': 'library_books',
    'color': 'green--text',
    'items': [
      { 'href': '/ccredito', 'title': 'Consult', 'icon': 'library_books', 'color': 'blue--text' },
      { 'href': '/extracto', 'title': 'Credit Status', 'icon': 'library_books', 'color': 'green--text' },
      { 'href': '/tabla', 'title': 'Liquidation Table', 'icon': 'library_books', 'color': 'red--text' }
    ]
  },
  { divider: true },
  { 'header': 'Approver' },
  { 'href': '/aprobar', 'title': 'Approve', 'icon': 'library_books', 'color': 'gray' },
  { 'header': 'System' },
  { 'href': '/settings', 'title': 'Settings', 'icon': 'settings', 'color': 'gray' },
  { 'href': '/login', 'icon': 'lock', 'title': 'Logout', 'color': 'gray' }
]
