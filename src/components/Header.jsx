export default function Header() {
  return (
    <header className=" my-12 mx-auto text-center flex flex-col items-center">
      <img
        className="w-20 h-20 object-contain bg-transparent"
        src="investment-calculator-logo.png"
        alt="a green bag with '$' logo"
      />
      <h1 className="text-2xl">React Investment Calculator</h1>
    </header>
  );
}
