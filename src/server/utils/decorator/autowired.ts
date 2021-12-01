import Injection from '../../Injection';

const Autowired = (target: any, key: string): void => {
  const service = Injection.getInjectionInstance().getService();
  const t = Reflect.getMetadata('design:type', target, key);
  if (service.has(t.name)) {
    const cls = service.get(t.name) as any;

    cls && Reflect.set(target, key, new cls());
  }
};

export default Autowired;
