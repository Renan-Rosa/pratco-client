import { Helmet } from 'react-helmet-async'

// import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ProductTableFilters } from './product-table-filter'
import { ProductTableRow } from './product-table-row'

export function Products() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <div className="space-y-2.5">
          <ProductTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Vencimento</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w[140px]">Produto</TableHead>
                  <TableHead className="w-[140px]">Valor produto</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <ProductTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          {/* <Pagination pageIndex={0} totalCount={105} perPage={10} /> */}
        </div>
      </div>
    </>
  )
}
