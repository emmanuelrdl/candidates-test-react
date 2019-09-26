import Product from "./Components/Product"
import SubProduct from "./Components/SubProduct"
import Form from "./Components/Form/index"
import Table from "./Components/Table"
import Dropdown from "./Components/Form/Dropdown"
import Search from "./Components/Form/Search"

const componentsIdentity = [
  { component: Product, code: "product", listeners: [] } ,
  { component: SubProduct, code: "subproduct", listeners: [] },
  { component: Form, code: "form", listeners: ['search', 'dropdown'] },
  { component: Table, code: "table", listeners: ['form'] },
  { component: Search, code: "search", listeners: ['search'] },
  { component: Dropdown, code: "dropdown", listeners: ['search', 'dropdown'] },
]

export default componentsIdentity
