# 20. Dimensionality reduction

A common form of unsupervised learning is **dimensionality reduction**, in which we learn a mapping from the high-dimensional visible space $\bold{x}\in\R^D$ to a low-dimensional latent space $\bold{z}\in \R^L$.

This mapping can either be parametric $\bold{z}=f(\bold{x};\theta)$, which can be applied to any input, or it can be a nonparametric mapping where we compute an **embeddings $\bold{z}_n$** for each input $\bold{x}_n$ in the dataset, but not for any other point.

The former is mostly used for data visualization whereas the latter can be used as a preprocessing step for other kind of learning algorithms. For example, we can produce an embedding by mapping $\bold{x}$ to $\bold{z}$, and then learn a simple linear classifier by mapping $\bold{z}$ to $y$.

[20.1 Principal component analysis (PCA)](20%20Dimensionality%20reduction%20fa1e814d9e844ba5803f102292128778/20%201%20Principal%20component%20analysis%20(PCA)%20e3f4602aa8d24f039f29ac71f278bb89.md)

[20.2 Factor analysis](20%20Dimensionality%20reduction%20fa1e814d9e844ba5803f102292128778/20%202%20Factor%20analysis%207053895183964b1c916de1e306bc8d6e.md)

[20.3 Autoencoders](20%20Dimensionality%20reduction%20fa1e814d9e844ba5803f102292128778/20%203%20Autoencoders%201baa6d7bb3064c43b47de4843705ccb4.md)

[20.4 Manifold learning](20%20Dimensionality%20reduction%20fa1e814d9e844ba5803f102292128778/20%204%20Manifold%20learning%209e3c81ac116846bf9c74cfdf879753d6.md)

[20.5 Word embeddings](20%20Dimensionality%20reduction%20fa1e814d9e844ba5803f102292128778/20%205%20Word%20embeddings%2075edfea25ab9457a8806da23e5542d0a.md)