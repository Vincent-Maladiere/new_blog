# 16. Exemplar-based Models

So far, we have dealt with **parametric models**, either unconditional $p(\bold{y}|\theta)$ or conditional $p(\bold{y|x},\theta)$.

$\theta$ is a vector of parameters estimated from a training dataset $\mathcal{D}=\{(\bold{x}_n,\bold{y}_n),n=1:N\}$, which is thrown away after training.

In this section, we consider various kinds of **nonparametric model** that keep the training data at test time —we call them **examplar-based models**.

Therefore, the number of parameters can grow with $|\mathcal{D}|$, and we focus on the similarity (or distance) between a test input $\bold{x}$ and training inputs $\bold{x}_n$.

[16.1 K Nearest Neighbor (KNN) Classification](16%20Exemplar-based%20Models%2077334eceede346a59cd9011b233452a0/16%201%20K%20Nearest%20Neighbor%20(KNN)%20Classification%2049170774aa5a4af1afee6d43d1b3cad4.md)

[16.2 Learning distance metrics](16%20Exemplar-based%20Models%2077334eceede346a59cd9011b233452a0/16%202%20Learning%20distance%20metrics%20bc3ba7935f5647519cacc88b3feff91c.md)

[16.3 Kernel density estimation (KDE)](16%20Exemplar-based%20Models%2077334eceede346a59cd9011b233452a0/16%203%20Kernel%20density%20estimation%20(KDE)%2069119957d9f6439d9d8a005dafb9f778.md)