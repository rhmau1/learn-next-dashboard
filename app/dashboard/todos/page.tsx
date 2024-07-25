import Table from '@/app/ui/todos/table';
import { lusitana } from '@/app/ui/fonts';
import { CreateTodo } from '@/app/ui/todos/buttons';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Todos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateTodo />
      </div>
      <Table />
    </div>
  );
}
