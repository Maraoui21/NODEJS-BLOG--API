const admin = `<div>
<div x-data="{ sidebarOpen: false }" class="flex bg-gray-200">
    <div class="flex-1 flex flex-col overflow-hidden">
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div class="container mx-auto px-6 py-8">
                <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
                <div class="mt-4">
                    <div class="flex flex-wrap -mx-6">
                        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>

                                <div class="mx-5">
                                    <h4 id='usersCounter' class="text-2xl font-semibold text-gray-700">8,282</h4>
                                    <div class="text-gray-500">TOTAL USERS</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                <svg  xmlns="http://www.w3.org/2000/svg" class="text-white h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                                </div>

                                <div class="mx-5">
                                    <h4 id="articlesCounter" class="text-2xl font-semibold text-gray-700">200,521</h4>
                                    <div class="text-gray-500">TOTAL ARTICLES</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                                </div>

                                <div class="mx-5">
                                    <h4 id="labelsCounter" class="text-2xl font-semibold text-gray-700">215,542</h4>
                                    <div class="text-gray-500">TOTAL LABELS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8">

                </div>

                <div class="flex flex-col mt-8">
                    <div class="-my-2 py-2 overflow-x-auto  sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div
                            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                            <table class="min-w-full">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Name</th>
                                        <th
                                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Title</th>
                                        <th
                                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Role</th>
                                        <th
                                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Id</th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                </thead>

                        <tbody id="table" class="overflow-auto bg-white">
                                    
                        </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</div>`


export {admin};