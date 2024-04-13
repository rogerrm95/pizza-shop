import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
      {/* COLUNA - DETALHES DO PEDIDO */}
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'xs'}>
              <Search className="h-3 w-3" />
              {/* Acessibilidade  */}
              {/* Acessibilidade  sr = Screen Only (Leitor de Tela) */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      {/* COLUNA - ID */}
      <TableCell className="font-mono text-sm font-medium">ORD-1</TableCell>

      {/* COLUNA - REALIZADO HÁ */}
      <TableCell className="text-muted-foreground">Há 15 minutos</TableCell>

      {/* COLUNA - STATUS */}
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      {/* COLUNA - CLIENTE */}
      <TableCell className="font-medium">Ana Paula Marques</TableCell>

      {/* COLUNA - TOTAL DO PEDIDO */}
      <TableCell className="font-medium">R$ 200,00</TableCell>

      {/* COLUNA - PRÓXIMA AÇÃO */}
      <TableCell>
        <Button variant={'outline'} size={'xs'}>
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      {/* COLUNA - CANCELAR PEDIDO */}
      <TableCell>
        <Button variant={'ghost'} size={'xs'}>
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
