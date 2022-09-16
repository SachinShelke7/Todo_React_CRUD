const DisplayTodo = (props: any) => {
  return (
    <div className="p-10">
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center mt-5">
        {props.todo?.map((item: any, index: any) => {
          return (
            <div
              className="p-4 bg-white border-2 border-gray-600 hover:border-gray-700 rounded-lg "
              key={index}
            >
              <h2 className="">Todo {item?.number}</h2>
              <h3 className="font-bold text-xl">Name : {item.name}</h3>
              <p className="font-bold">Detail : {item.detail}</p>
              <p className="font-bold text-xs">Date : {item.deadline}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => props.setDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTodo;
