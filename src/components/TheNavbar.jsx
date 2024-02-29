import { Link } from "react-router-dom";
const TheNavbar = () => {
  return (
    <div className="px-10 py-4 flex items-center justify-between text-white bg-[#1B1A55]">
      <h1 className="text-2xl font-semibold">DeveloperBlog</h1>
      <ul className="font-medium flex space-x-4">
        <li className="cursor-pointer hover:text-yellow-500">
           <Link to={'/'}>Home</Link>
          </li>
        <li className="cursor-pointer hover:text-yellow-500">
           <Link to={'/posts'}>Posts</Link>
          </li>
        <li className="cursor-pointer hover:text-yellow-500">
          <Link to={'/about'}>About</Link>
          </li>
      </ul>
    </div>
  );
};
export default TheNavbar;
