import Link from "next/link"

export default function Component() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Vibrant Abstractions</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Jane Doe</p>
          <div className="mt-2 font-semibold text-lg">$250</div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="/transactions">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Coastal Serenity</h3>
          <p className="text-sm text-gray-500 line-clamp-1">John Smith</p>
          <div className="mt-2 font-semibold text-lg">$350</div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="/transactions">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Dreamscape</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Emily Lee</p>
          <div className="mt-2 font-semibold text-lg">$450</div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Enchanted Forest</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Michael Chen</p>
          <div className="mt-2 font-semibold text-lg">$550</div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Celestial Harmony</h3>
          <p className="text-sm text-gray-500 line-clamp-1">Sarah Kim</p>
          <div className="mt-2 font-semibold text-lg">$650</div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Artwork"
          className="aspect-square object-cover w-full"
          height={500}
          src="/placeholder.svg"
          width={500}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h3 className="font-bold text-xl line-clamp-1">Ethereal Landscapes</h3>
          <p className="text-sm text-gray-500 line-clamp-1">David Park</p>
          <div className="mt-2 font-semibold text-lg">$750</div>
        </div>
      </div>
    </div>
  )
}