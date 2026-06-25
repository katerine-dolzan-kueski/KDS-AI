import { cn } from '../../../lib/utils';
import { ShieldLockIcon, Shimmer, Card } from '../../..';
import {
  OfferFooterWrapperProps,
  OfferFooterRowAmountProps,
  OfferFooterProps,
  OfferFooterRowSaveProps,
  OfferFooterDataRow,
  OfferFooterDataRowAmount,
  OfferFooterDataRowRate,
  OfferFooterDataProtectionProps,
} from './OfferFooter.types';
import { amountStyles, crossedStyles, hiddableStyles, labelStyles, legalStyles } from './OfferFooter.styles';
import { type PropsOf } from '../../../lib/types';

const RowAmount = ({ 
  $label, $variant, $amount, $crossed, $loading, className, $emphatized, $success,
  ...restProps
}: OfferFooterRowAmountProps) => {
  return (
    <div className={cn('flex justify-between gap-x2', className)} {...restProps}>
      <div className={labelStyles({ $variant })}>
        {$label}
      </div>
      <div className="shrink-0 relative flex gap-x1 items-baseline">
        {$loading && <Shimmer className="absolute inset-0" />}
        {$crossed && (
          <span className={crossedStyles({ $hide: $loading })}>{$crossed}</span>
        )}
        <span className={amountStyles({ $variant, $emphatized, $success, $hide: $loading })}>
          {$variant==='total' && (
            <span className="typo-headline-3!">$</span>
          )}
          {$amount}
        </span>
      </div>
    </div>
  );
};

const RowSave = ({ $amount, $leading, $trailing, $loading, ...restProps }: OfferFooterRowSaveProps) => {
  return (
    <div className="typo-body-1 text-text-and-icons-secondary" {...restProps}>
      {$leading && <span>{$leading}&nbsp;</span>}
      <span className="typo-body-1-emphasized relative">
        {$loading && <Shimmer className="absolute inset-0" />}
        <span className={hiddableStyles({ $hide: $loading })}>
          {$amount}
        </span>
      </span>
      {$trailing && <span>&nbsp;{$trailing}</span>}
    </div>
  );
};

const Legal = ({ className, children, ...restProps }: PropsOf<'div'>) => (
  <div className={cn(legalStyles(), className)} {...restProps}>
    {children}
  </div>
);

const Wrapper = ({ children, className, $elevated, ...restProps }: OfferFooterWrapperProps) => {
  return (
    <Card
      className={cn('rounded-none! flex flex-col gap-x4 bg-background-primary py-x4 px-x6', className)}
      $variant={$elevated ? 'elevated' : 'base'}
      {...restProps}
    >
      {children}
    </Card>
  );
};

const RowsWrapper = ({ children, className, ...props }: PropsOf<'div'>) => (
  <div {...props} className={cn('flex flex-col gap-x1', className)}>
    {children}
  </div>
);

const DataProtection = ({ $link, $linkText, className, ...restProps }: OfferFooterDataProtectionProps) => (
  <div className={cn('flex gap-x2 items-center self-center', className)} {...restProps}>
    <ShieldLockIcon className="w-x6 h-x6 text-stroke-success" />
    <a href={$link} target="_blank" rel="noreferrer" className="typo-body-2 text-text-and-icons-secondary underline">
      {$linkText || 'Como protegemos tus datos'}
    </a>
  </div>
);

const defaultLabels: Record<OfferFooterDataRow['type'], string> = {
  discount: 'Descuento',
  interest: 'Intereses totales',
  total: 'Total a pagar',
  rate: '',
  save: '',
};

function formatValue(value: number | string, isRate: boolean, config?: Intl.NumberFormatOptions): string {
  if (typeof value === 'string') return value;
  return isRate ? `${value}%` : value.toLocaleString('es-MX', config);
}

function getRowLabels(data: OfferFooterDataRowAmount | OfferFooterDataRowRate) {
  const isRate = data.type === 'rate';
  const amountConfig: Intl.NumberFormatOptions = data.type === 'total'
    ? { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }
    : { style: 'currency', currency: 'MXN', minimumFractionDigits: 2, maximumFractionDigits: 2 };

  const crossedConfig = isRate ? undefined : { style: 'currency', currency: 'MXN' } as const;

  return {
    $label: data.label || defaultLabels[data.type],
    $amount: formatValue(data.amount, isRate, amountConfig),
    $crossed: data.crossed ? formatValue(data.crossed, isRate, crossedConfig) : undefined,
  };
}

function getRowFormat(data: OfferFooterDataRowAmount | OfferFooterDataRowRate) {
  const isRateType = data.type === 'rate';
  const isInterestType = data.type === 'interest';
  const isDiscountType = data.type === 'discount';

  const emptyAmount = data.amount === 0 || data.amount === '0';
  const hasCrossed = typeof data.crossed === 'string' ? data.crossed.length > 0 : (data?.crossed ?? 0) > 0;
  const isEmptyInterest = isInterestType && emptyAmount;
  const isEmptyRate = isRateType && emptyAmount;

  return {
    $success: typeof data.success === 'boolean'
      ? data.success
      : (isDiscountType || hasCrossed || isEmptyInterest),
    $emphatized: typeof data.emphatized === 'boolean'
      ? data.emphatized
      : (isDiscountType || isInterestType || isEmptyRate),
  };
}

const ConfiguredOfferFooter = ({
  children,
  className,
  $rows,
  $dataProtectionLink,
  $dataProtectionLinkText,
  $elevated,
  $legalContent,
  ...restProps
}: OfferFooterProps) => {
  return (
    <Wrapper className={className} $elevated={$elevated} {...restProps}>
      {$rows?.length && (
        <RowsWrapper>
          {$rows?.map((data) => (
            data.type === 'save' ? (
              <RowSave
                key={data.id}
                $amount={typeof data.amount === 'number' ? data.amount.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : data.amount}
                $leading={data.leading || 'Tu ahorro será de'}
                $trailing={data.trailing || 'en intereses.'}
                $loading={data.loading}
              />
            ) : (
              <RowAmount
                key={data.id}
                $variant={data.type}
                $loading={data.loading}
                {...getRowLabels(data)}
                {...getRowFormat(data)}
              />
            )
          ))}
        </RowsWrapper>
      )}
      {children}
      {$legalContent && (
        <Legal>
          {$legalContent}
        </Legal>
      )}
      {$dataProtectionLink && <DataProtection $link={$dataProtectionLink} $linkText={$dataProtectionLinkText} />}
    </Wrapper>
  );
};

export const OfferFooter = Object.assign(ConfiguredOfferFooter, {
  RowAmount, RowSave, Legal, Wrapper, DataProtection,
});
