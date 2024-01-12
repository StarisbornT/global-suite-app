export default function Reactivate() {
  return (
    <>
      <div
        className="container w-8/12 mx-5 shadow-lg "
        style={{ marginLeft: "25%" }}
      >
        <form>
          <div className="space-y-12 mt-5">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold bg-blue-900 leading-7 p-3 text-white rounded-t-lg">
                Reactivate User
              </h2>

              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 p-3 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    User Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    User Role
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <fieldset>
                  <div className="mt-2 space-y-6">
                    <div className="relative flex w-96 gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label className="font-medium text-gray-900">
                          Suspended User
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label className="font-medium text-gray-900">
                          Loaded User
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="p-5 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reactivate
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
