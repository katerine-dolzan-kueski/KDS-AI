import { useMemo } from 'react';
import { cn } from '../../../lib/utils';
import { itemStyles, itemChip } from './PaymentPlanSelector.styles';
import { PaymentPlanSelectorProps, PaymentPlanSelectorItemProps, PaymentPlanSelectorItemData, PaymentPlanHeaderProps, PaymentPlanChipProps } from './PaymentPlanSelector.types';
import { Button, Shimmer } from '../../atoms';

const formatAmount = (amount: number) => amount.toLocaleString('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatDisplayAmount = (value: number | string | undefined): string => {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;
  return formatAmount(value);
};

const Chip = ({ children, className }: PaymentPlanChipProps) => {
  return (
    <div className={cn(itemChip, className)}>{children}</div>
  );
};

const Header = ({
  $planHeaderLabel = "Plan de pagos:",
  $planCountText,
  $changeButtonLabel = "Cambiar",
  $onChangePlan,
}: PaymentPlanHeaderProps) => {
  return (
    <div className="flex">
      <div className="flex-1 flex gap-x1 items-center">
        <span className="text-text-and-icons-primary typo-body-2-emphasized">
          {$planHeaderLabel}
        </span>
        <span className="text-text-and-icons-primary typo-body-2">
          {$planCountText}
        </span>
      </div>
      <Button $variant="ghost-primary" $size="sm" onClick={$onChangePlan}>
        {$changeButtonLabel}
      </Button>
    </div>
  );
};

const Item = ({
  $amount, $quincena, $date, className, $onSelect, $loading, $quincenaLabel, children
}: PaymentPlanSelectorItemProps) => {
  const formattedAmount = useMemo(
    () => formatDisplayAmount($amount),
    [$amount]
  );
  
  const quincenaText = useMemo(() => {
    if (!$quincena) return '';
    return $quincenaLabel ? $quincenaLabel($quincena) : `${$quincena}ª quincena`;
  }, [$quincenaLabel, $quincena]);

  return (
    <button
      type="button"
      className={cn(itemStyles({ $loading }), className)}
      onClick={$loading ? undefined : $onSelect}
      disabled={$loading}
    >
      {children || (
        <>
          <Chip>{quincenaText}</Chip>
          <div className="self-stretch flex flex-col items-start gap-half">
            {$loading ? (
              <>
                <Shimmer className="self-stretch h-x7" />
                <Shimmer className="self-stretch h-x5" />
              </>
            ) : (
              <>
                <div className="text-text-and-icons-primary typo-headline-3 mt-1">
                  {formattedAmount}
                </div>
                <div className="text-text-and-icons-secondary typo-body-2">
                  {$date}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </button>
  );
};

const Carousel = ({
  $items,
  $onSelect,
  $loading,
  $plan,
  $onChangePlan,
  $planHeaderLabel = "Plan de pagos:",
  $planCountLabel,
  $changeButtonLabel = "Cambiar",
}: PaymentPlanSelectorProps) => {
  const items = useMemo<PaymentPlanSelectorItemData[]>(() => {
    if ($loading) {
      return Array.from({ length: $plan }, (_, index) => ({
        quincena: index + 1,
        amount: 0,
        date: '',
      }));
    }
    return $items || [];
  }, [$loading, $items, $plan]);

  const planCountText = useMemo(() => 
    $planCountLabel ? $planCountLabel($plan) : `${$plan} quincenas`,
    [$planCountLabel, $plan]
  );

  return (
    <div className="flex flex-col gap-x1">
      <Header 
        $planHeaderLabel={$planHeaderLabel}
        $planCountText={planCountText}
        $changeButtonLabel={$changeButtonLabel}
        $onChangePlan={$onChangePlan}
      />
      <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-x2">
        {items.map((item) => (
          <Item
            key={item.quincena}
            $loading={$loading}
            $quincena={item.quincena}
            $amount={item.amount}
            $date={item.date}
            className="shrink-0"
            $onSelect={() => $onSelect?.(item)}
          />
        ))}
      </div>
    </div>
  );
};

export const PaymentPlanSelector = Object.assign(Carousel, { Item, Header, Chip });
