import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Button disabled variant={'outline'} size={'xs'}>
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>

        {/* COLUNA - ID */}
        <TableCell>
          <Skeleton className="h-4 w-[172px]" />
        </TableCell>

        {/* COLUNA - REALIZADO HÁ */}
        <TableCell>
          <Skeleton className="h-4 w-[142px]" />
        </TableCell>

        {/* COLUNA - STATUS */}
        <TableCell>
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>

        {/* COLUNA - CLIENTE */}
        <TableCell>
          {' '}
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>

        {/* COLUNA - TOTAL DO PEDIDO */}
        <TableCell>
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>

        {/* COLUNA - PRÓXIMA AÇÃO */}
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>

        {/* COLUNA - CANCELAR PEDIDO */}
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    )
  })
}
