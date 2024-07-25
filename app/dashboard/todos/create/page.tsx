import Form from '@/app/ui/todos/create-form';
import Breadcrumbs from '@/app/ui/todos/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Todos', href: '/dashboard/todos' },
          {
            label: 'Create Todo',
            href: '/dashboard/todos/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
